const expressJwt = require('express-jwt');
const secret = require('./secret');

const AuthCheck = expressJwt({
  secret:secret
});

module.exports = AuthCheck;
