'use strict';

var utils = require('../utils/writer.js');
var Concerts = require('../service/ConcertsService');

module.exports.concertsIdGet = function concertsIdGet (req, res, next, id) {
  Concerts.concertsIdGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllConcerts = function getAllConcerts (req, res, next) {
  Concerts.getAllConcerts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
