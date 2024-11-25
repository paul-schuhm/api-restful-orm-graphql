const express = require("express");
const db = require("../db");
const { createJWT } = require("../jwt");

const router = express.Router();

router.post("/login", (req, res, next) => {
  //Est ce qu'il y a les credentials ?

  if (!req.body.pseudo || !req.body.password) {
    return res.status(400).json({ msg: "Impossible de vous authentifier" });
  }

  //Identification (login)
  //Authentification (password)
  const user = db.users.find(
    (user) =>
      user.login === req.body.pseudo && user.password === req.body.password
  );

  if (user === undefined) {
    return res.status(400).json({ msg: "Impossible de vous authentifier" });
  }

  //Authentifié
  //Fabriquer et délivrer un jwt
  const jwt = createJWT(user.login, user.role === "admin");

  //Retourne le jwt au client
  res.status(201).json({
    access_token: jwt,
  });
});

module.exports = router;
