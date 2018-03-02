const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const secret = require('./secret');
const AuthCheck = require('./AuthCheck');
const config = require('./config');
//get sales router
// var router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

const connection =  mysql.createConnection(config);

connection.connect();

passport.use(new LocalStrategy(
   // { passReqToCallback : true},


  function(username, password, done) {
    if ((username === "test") && (password === "test")) {
      return done(null, { username: username, id: 1 });
    } else {
      return done(null, false, "Failed to login.");
    }
    // DUMMY DATA REPLACE WITH ACTUAL QUERY  //
  }
));

app.post('/login', passport.authenticate('local', {session:false}), (req,res)=>{
  console.log(req.body);
  const payload = {user:req.user,role:'test'};
  const token = jwt.sign(payload,secret,{expiresIn:'7d'});
  console.log(token);
  res.send({token})
});

app.get('/userDetails', AuthCheck, (req,res)=>{
  res.send(req.user)
});

//getAllSales
app.get('/sales', function (req, res, next) {
  connection.query('select * from sales', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

app.get('/products', function (req, res, next) {
  connection.query('select * from products', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

app.get('/sku/:product_name', function (req, res, next) {
  console.log(req.params.product_name)
  connection.query('select * from  sku left join products on products.product_id = sku.products_sku where Product_name = ?', req.params.product_name , function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query. ');
  });
});

//Static path to dist
app.use(express.static(path.join(__dirname, '../dist')));


// Catch all other routes - Place below all other routes
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

// Catch all other routes and return the index file
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port,()=>console.log(`Server Running on port ${port}`));
