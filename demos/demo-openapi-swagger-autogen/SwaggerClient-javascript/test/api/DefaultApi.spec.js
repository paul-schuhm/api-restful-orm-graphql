/*
 * Démo Design-first du service web de billetterie de concerts
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.63
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DmoDesignFirstDuServiceWebDeBilletterieDeConcerts);
  }
}(this, function(expect, DmoDesignFirstDuServiceWebDeBilletterieDeConcerts) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.DefaultApi();
  });

  describe('(package)', function() {
    describe('DefaultApi', function() {
      describe('rootGet', function() {
        it('should call rootGet successfully', function(done) {
          // TODO: uncomment rootGet call
          /*

          instance.rootGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));