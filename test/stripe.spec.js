'use strict';

var testUtils = require('./testUtils');
var chai = require('chai');
var when = require('when');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey()
);

var expect = chai.expect;

var CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2015
  }
};

describe('Stripe Module', function() {

  var cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('Callback support', function() {

    describe('Any given endpoint', function() {

      it('Will call a callback if successful', function(done) {

        var defer = when.defer();

        stripe.customers.create({
          description: 'Some customer',
          card: {
            number: '4242424242424242',
            exp_month: 12,
            exp_year: 2015
          }
        }, function(err, customer) {
          cleanup.deleteCustomer(customer.id);
          defer.resolve('Called!');
        });

        return expect(defer.promise).to.eventually.become('Called!');
      });

      it('Given an error the callback will receive it', function() {

        var defer = when.defer();

        stripe.customers.createCard('nonExistentCustId', { card: {} }, function(err, customer) {
          if (err) {
            defer.resolve('ErrorWasPassed');
          } else {
            defer.reject('NoErrorPassed');
          }
        });

        return expect(defer.promise).to.eventually.become('ErrorWasPassed')
      });

    });
  });

});
