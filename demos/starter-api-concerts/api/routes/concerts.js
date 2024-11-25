var express = require('express');
var router = express.Router();
var db = require('../db');
var hal = require('../hal')


router.get('/concerts', (req, res, next) => {


    const resourceObject = hal.mapConcertListToResourceObject(db.concerts);

    res.status(200).format({
        'application/hal+json': function () {
            res.send(resourceObject)
            return;
        }
    });
})

router.get('/concerts/:id([0-9]+)', (req, res, next) => {

    const id = req.params.id;

    const concert = db.concerts.find(concert => concert.id == id);

    if (concert === undefined) {
        res.status(404).json({})
        return;
    }

    res.status(200).format({
        'application/hal+json': function () {
            res.send(hal.mapConcertToResourceObject(concert))
            return;
        }
    });
})

module.exports = router