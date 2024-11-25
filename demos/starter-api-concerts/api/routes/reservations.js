var express = require("express");
var router = express.Router();
var { checkTokenMiddleware } = require("../jwt");

//Implémenter la ressource protégée par authentification et autorisation

router.get(
  "/concerts/:id/reservations",
  checkTokenMiddleware,
  (req, res, next) => {
    const payload = res.locals.decodedToken;

    //Vérifier l'autorisation (admin)
    if (!payload.isAdmin)
      res
        .send(401)
        .json({ msg: "Vous n'êtes pas autorisé à accéder à cette ressource" });

    res
      .status(200)
      .send("Voici la liste des réservations du concert...A implementer");
  }
);

module.exports = router;
