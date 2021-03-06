'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Invoices Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.invoices.retrieve('invoiceId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId1',
        data: {}
      });

    });

  });

  describe('create', function() {

    it('Sends the correct request', function() {

      stripe.invoices.create({ application_fee: 111 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        data: { application_fee: 111 }
      });

    });

  });

  describe('update', function() {

    it('Sends the correct request', function() {

      stripe.invoices.update('invoiceId1', { application_fee: 200 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId1',
        data: { application_fee: 200 }
      });

    });

  });

  describe('retrieveLines', function() {

    it('Sends the correct request', function() {

      stripe.invoices.retrieveLines('invoiceId2');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/invoiceId2/lines',
        data: {}
      });

    });

  });

  describe('retrieveUpcoming', function() {

    it('Sends the correct request', function() {

      stripe.invoices.retrieveUpcoming({ customer: 'customerId1' });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/upcoming',
        data: { customer: 'customerId1' }
      });

    });

  });

  describe('pay', function() {

    it('Sends the correct request', function() {

      stripe.invoices.pay('invoiceId6');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/invoiceId6/pay',
        data: {}
      });

    });

  });

  describe('list', function() {

    it('Sends the correct request', function() {

      stripe.invoices.list({ count: 25 });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices',
        data: { count: 25 }
      });

    });

  });

});