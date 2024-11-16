'use strict';

var utils = require('../utils/writer.js');
var Administration = require('../service/AdministrationService');

module.exports.loginPost = function loginPost (req, res, next) {
  Administration.loginPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
