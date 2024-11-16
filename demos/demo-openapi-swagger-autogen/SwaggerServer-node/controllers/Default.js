'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.rootGet = function rootGet (req, res, next) {
  Default.rootGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
