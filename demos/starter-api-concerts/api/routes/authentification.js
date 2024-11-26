const express = require("express");
const db = require("../models/index");
const { createJWT } = require("../jwt");

const router = express.Router();

router.post("/login", async (req, res, next) => {

  //Est ce qu'il y a les credentials demandés?
  if (!req.body.pseudo || !req.body.password) {
    return res.status(400).json({ msg: "Impossible de vous authentifier" });
  }

  //Remarque: En conditions réelles on "hasherait" les mdp et comparerait les hash. Laissé en exercice.
  const user = await db.User.findOne({ where: { pseudo: req.body.pseudo, password: req.body.password } });

  if (user === null) {
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
