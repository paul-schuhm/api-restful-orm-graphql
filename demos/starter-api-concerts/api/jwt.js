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

//Fonction qui extrait le token du header

function extractBearerToken(header) {
  if (typeof header !== "string") return false;

  const matches = header.match(/(bearer)\s+(\S+)/i)

  return matches && matches[2];
}

//Middleware : authentification via jwt

module.exports = { createJWT };
