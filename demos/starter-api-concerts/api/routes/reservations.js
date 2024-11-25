var express = require('express');
var router = express.Router();

//Implémenter la ressource protégée par authentification et autorisation

router.get('/concerts/:id/reservations', (req, res, next) => {

    //Vérifier si il y a un JWT ?
    //Vérifier le token (valide)
    //Vérifier l'autorisation (admin)

    res.status(200).send('a implementer');
});

module.exports = router