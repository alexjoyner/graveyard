'use strict';
var express = require('express'),
    router = express.Router(),
    app = express();
// Mongoose models
var hauls = require('../../models/haulModel.js');
var users = require('../../models/usersModel.js');

router.post('/hauls/newBid', function(req, res) {
    var bidInfo = req.body;
    hauls.findOne({
        '_id': bidInfo.jobId
    }, function(err, haulFound) {
        if (err) throw err;
        if (!haulFound) res.status(500).send('No Haul Found').end();
        if (haulFound) {
            users.findOne({
                '_id': bidInfo.partnerId
            }, function(err, partner) {
                if (err) throw err;
                if (!partner) res.status(500).send('We didn\'t find you: internal error');
                if (partner) {
                    console.log('Bid: ', bidInfo.bid);
                    var newBid = {
                        from: bidInfo.partnerId,
                        partnerFirst: partner.profile.firstName,
                        amount: bidInfo.bid,
                        eta: bidInfo.eta,
                    };
                    haulFound.bids.push(newBid);
                    haulFound.save(function(err, updatedHaul) {
                        if (err) {
                            res.status(500).send('Internal error, try again');
                        } else {
                            console.log('Emitting bid');
                            console.log('updatedHaul: ', updatedHaul);
                            req.io/*.to('room' + updatedHaul._id)*/.emit('NewBidSet', updatedHaul.bids);
                            res.status(200).send('YOU BID $' + newBid.bid).end();
                        }
                    });
                }
            });
        }
    });
});
router.post('/hauls/acceptOffer', function(req, res) {
    var info = req.body;
    console.log('Info: ', info);
    if (!info.bidAccepted) {
        res.status(500).send('No bid reseived').end();
    } else {
        hauls.findOne({
            '_id': info.haulId
        }, function(err, haul) {
            console.log('Haul: ', haul);
            if (err) throw err;
            if (!haul) {
                res.status(500).send('Internal error: no haul found').end();
            } else
            if (haul.status.stage === 0) {
                var testi = null;
                for (var i = 0; i < haul.bids.length; i++) {
                    console.log('Accepted: ', haul.bids[i]._id.toString() === info.bidAccepted.toString());
                    if (haul.bids[i]._id.toString() === info.bidAccepted.toString()) {
                        haul.bidAccepted = haul.bids[i];
                        testi = i;
                    }
                }
                if (haul.bidAccepted) {
                    haul.status.stage++;
                    haul.status.tag = 'Bid Accepted';
                    console.log('Haul now: ', haul);
                    haul.save(function(err, newHaul) {
                        if (err) throw err;
                        if (!haul.bidAccepted || haul.bidAccepted === {}) {
                            newHaul.status.stage--;
                            newHaul.status.tag = 'Accepting Bids';
                            newHaul.save(function(err) {
                                if (err) throw err;
                                res.status(500).send('Internal: saving bid failed, please try again');
                            });
                        } else {
                            req.io.emit('OfferAccepted', haul.bidAccepted.from);
                            res.status(200).send('Offer accepted').end();
                        }
                    });
                } else {
                    res.status(500).send('Bid rejected').end();
                }
            } else {
                res.status(500).send('Offer Already Accepted').end();
            }
        });
    }
});
module.exports = router;