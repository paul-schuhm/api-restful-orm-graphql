'use strict';


/**
 * Obtenir le détail d'un concert
 *
 * id Integer 
 * returns concert-detail
 **/
exports.concertsIdGet = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "_links" : { },
  "artist" : "artist",
  "description" : "description",
  "location" : "location"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtenir la liste des concerts à venir
 *
 * returns concerts
 **/
exports.getAllConcerts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "concerts" : [ {
    "date" : "2000-01-23",
    "_links" : { },
    "artist" : "artist",
    "description" : "description",
    "location" : "location"
  }, {
    "date" : "2000-01-23",
    "_links" : { },
    "artist" : "artist",
    "description" : "description",
    "location" : "location"
  } ],
  "_links" : {
    "key" : {
      "templated" : false,
      "name" : "name",
      "href" : "href",
      "type" : "type",
      "deprecation" : "deprecation"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

