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
    instance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi();
  });

  describe('(package)', function() {
    describe('ConcertsApi', function() {
      describe('concertsIdGet', function() {
        it('should call concertsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for concertsIdGet call and complete the assertions
          /*

          instance.concertsIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertDetail);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllConcerts', function() {
        it('should call getAllConcerts successfully', function(done) {
          // TODO: uncomment getAllConcerts call and complete the assertions
          /*

          instance.getAllConcerts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.Concerts);

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