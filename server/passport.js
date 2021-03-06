// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var dbconfig = require('./config');
var connection = mysql.createConnection(dbconfig);

// expose this function to our app using module.exports
module.exports = function(passport) {


  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-signup',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows) {
          if (err)
            return done(err);
          if (rows.length) {
            return done(null, false);
          } else {
            // if there is no user with that username
            // create the user
            var newUserMysql = {
              username: username,
              password: bcrypt.hashSync(password, 10, null), // use the generateHash function in our user model
              email:req.body.email,
              firstname:req.body.firstname,
              lastname:req.body.lastname

            };

            let insertQuery = "INSERT INTO users ( username, password,email,firstname,lastname ) values (?,?,?,?,?)";

            connection.query(insertQuery,[newUserMysql.username, newUserMysql.password,newUserMysql.email,newUserMysql.firstname,newUserMysql.lastname],function(err, rows) {
              if(!err){
              return done(null, newUserMysql)

              } else {
                console.log(err)
              }
            });
          }
        });
      })
  );

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-login',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) { // callback with email and password from our form
        connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
          if (err)
            return done(err);
          if (!rows.length) {
            return done(null, false);
          }
          // if the user is found but the password is wrong
          if (!bcrypt.compareSync(password, rows[0].password))
            return done(null, false);

          // all is well, return successful user
          return done(null, {username:rows[0].username,level:rows[0].level,user_id:rows[0].user_id});
        });
      })
  );
};
