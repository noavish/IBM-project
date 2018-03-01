const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local');
const passport = require('passport')
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());



//Static path to dist
app.use(express.static(path.join((__dirname, 'dist'))));


//Catch all other routes - Place below all other routes
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

// Catch all other routes and return the index file
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port,()=>console.log(`Server Running on port ${port}`));
