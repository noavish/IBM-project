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
const api = require('./api/api');
const crypto = require('crypto');
const config = require('./config')
const connection = mysql.createConnection(config);
require('./passport')(passport); // pass passport for configuration

connection.connect()


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use('/api', api);


app.post('/login', passport.authenticate('local-login', {session:false}), (req,res)=>{
  const payload = {user:req.user,role:req.user.level};
  const token = jwt.sign(payload,secret,{expiresIn:'7d'});

  res.send({token})
});

app.post('/register',passport.authenticate('local-signup',{
  successRedirect : '/'
}))



app.get('/userDetails', AuthCheck, (req,res)=>{
  res.send(req.user)
});

//Static path to dist
app.use(express.static(path.join(__dirname, '../dist')));


// Catch all other routes - Place below all other routes
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

// Catch all other routes and return the index file
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port,()=>console.log(`Server Running on port ${port}`));
