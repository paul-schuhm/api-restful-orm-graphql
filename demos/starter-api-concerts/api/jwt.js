const jwt = require("jsonwebtoken");

//Paramètres JWT
const expires = "1 day";
const secret = "mysecret";

function createJWT(login, isAdmin) {
  //La lib nous génère le token
  return jwt.sign(
    {
      login,
      isAdmin,
    },
    secret,
    {
      expiresIn: expires,
    }
  );
}

module.exports = { createJWT };
