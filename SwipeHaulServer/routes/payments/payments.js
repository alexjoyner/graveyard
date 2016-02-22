'use strict';
var express = require('express'),
    router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var braintree = require('braintree');

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: '9c3zn8ttj5x65ydd',
    publicKey: 'wf55tcsp92js5xbc',
    privateKey: '4a8194544a711fd34fe07cc0719e3a85'
});

//Routes Base : '/auth'
/*
request contents:
username,
password,
email,
phone #,
profile: 3 interests
*/
router.get('/client_token', function(req, res) {
    gateway.clientToken.generate({}, function(err, response) {
        res.send(response.clientToken);
    });
});
router.post('/payInfoSetup', function(req, res){
    var payInfo = req.body;
    
});
router.post('/checkout', function(req, res) {
    var nonce = req.body.payment_method_nonce;
    // Use payment method nonce here
    gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonce,
    }, function(err, result) {
        if(err) res.status(500).send(err).end();
        else
            res.status(200).send(result).end();
    });
});
module.exports = router;