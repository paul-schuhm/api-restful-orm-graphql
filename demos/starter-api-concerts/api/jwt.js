const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

//Paramètres JWT
const expires = "1 day";
const secret = fs.readFileSync(path.resolve(__dirname, "private.key"));

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

  const matches = header.match(/(bearer)\s+(\S+)/i);

  return matches && matches[2];
}

//Middleware : authentification via jwt

function checkTokenMiddleware(req, res, next) {
  //Vérifier si il y a un JWT ?
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);
  if (!token) {
    return res
      .send(401)
      .json({ msg: "Vous n'êtes pas autorisé à accéder à cette ressource" });
  }
  //Vérifier le token (valide)
  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      res
        .send(401)
        .json({ msg: "Vous n'êtes pas autorisé à accéder à cette ressource" });
    } else {
      //Le jwt est vérifié !
      //Attache le jwt décodé pour les middlewares suivant
      res.locals.decodedToken = decodedToken;
      next();
    }
  });

  return;
}

module.exports = { createJWT, checkTokenMiddleware };
