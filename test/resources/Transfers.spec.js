'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Transfers Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.transfers.retrieve('transferId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers/transferId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.transfers.create({
        amount: 200, currency: 'usd', recipient: {}
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers',
        data: { amount: 200, currency: 'usd', recipient: {} }
      });

    });

  });

  describe('cancel', function() {

    it('Sends the correct request', function() {

      stripe.transfers.cancel('transferId4');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/transfers/transferId4/cancel',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.transfers.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/transfers',
        data: {}
      });

    });

  });

});
