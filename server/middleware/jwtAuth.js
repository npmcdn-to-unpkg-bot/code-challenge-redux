const jwt = require('express-jwt');
const fs = require('fs');
const publicKey = fs.readFileSync(`${__dirname}/../../keys/jwt-public.pem`);

module.exports = function authorize(req, res, next) {
  jwt({ secret: publicKey })(req, res, next);
};
