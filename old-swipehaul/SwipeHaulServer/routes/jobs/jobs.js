'use strict';
var express = require('express'),
    router = express.Router();
var gm = require('gm');
var fs = require('fs');
var S3FS = require('s3fs'), //abstraction over Amazon S3's SDK
    s3fsImpl = new S3FS('swipehaul/haulimages', {
        accessKeyId: 'AKIAJL2HHKQPQQXXACMA',
        secretAccessKey: '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'
    });

// Mongoose models
var hauls = require('../../models/haulModel.js');
var users = require('../../models/usersModel.js');

router.post('/postHaul', function(req, res) {
    hauls.findOne({
        who: req.body.who
    }, function(err, haul) {
        if (err) throw err;
        if (!haul) {
            console.log('New haul');
            console.log('Haul info: ', req.body);
            var newHaul = new hauls(req.body);
            newHaul.save(function(err, roomReturned) {
                if (err) throw err;
                console.log('Room saved: ', roomReturned);
                req.io.emit('NewHaul', newHaul);
                res.status(200).send(newHaul).end();
            });
        } else {
            console.log('Haul already there');
            res.status(500).send('Haul already there').end();
            // var count = 0;
            // var what = req.body.what;
            // for (var i = 0; i < what.length; i++) {
            //     s3fsImpl.unlink(what[i], function(err) {
            //         count++;
            //         if (err) throw err;
            //         if (count === what.length) {
            //             console.log('done removing: ', what);
            //             if (haul.hasExpired()) {
            //                 res.status(500).send('Haul already posted that has expired').end();
            //             } else {
            //                 res.status(500).send('Haul already posted that has not expired').end();
            //             }
            //         }
            //     });
            // }
        }
    });
});
router.post('/nextStage', function(req, res) {
    if (!req.body) {
        res.status(500).send('Internal: no body sent').end();
    } else {
        var info = req.body;
        hauls.findOne({
            '_id': info.jobId
        }, function(err, haul) {
            if (err) throw err;
            if (!haul) {
                res.status(500).send('No haul found').end();
            } else {
                var statusChanged = false;
                haul.status.stage++;
                switch (haul.status.stage) {
                    case 0: // Accepting bids
                        statusChanged = true;
                        haul.status.tag = 'Accepting Bids';
                        break;
                    case 1: // Bid Accepted
                        statusChanged = true;
                        haul.status.tag = 'Bid Accepted';
                        break;
                    case 2: // In route
                        statusChanged = true;
                        haul.status.tag = 'In Route';
                        break;
                    case 3: // Arriving 
                        statusChanged = true;
                        haul.status.tag = 'Arrived';
                        break;
                    case 4: // Job Started
                        statusChanged = true;
                        haul.status.tag = 'Job Started';
                        break;
                    case 5: // Job Ended
                        statusChanged = true;
                        haul.status.tag = 'Job Ended';
                        break;
                }
                if (statusChanged) {
                    haul.save(function(err) {
                        if (err) throw err;
                        req.io.emit('Status changed',  haul.status.tag);
                        res.status(200).send(haul).end();
                    });
                } else {
                    res.status(500).send('Status not changed').end();
                }
            }
        });
    }
});
router.get('/getHauls', function(req, res) {
    hauls.find({},
        function(err, jobs) {
            if (err) throw err;
            if (!jobs) {
                res.status(500).send('no hauls found').end();
            } else {
                res.status(200).send(jobs).end();
            }
        });
});
router.get('/currentHaul/:id', function(req, res) {
    hauls.findOne({
            'who': req.params.id
        },
        function(err, job) {
            if (err) throw err;
            if (!job) {
                res.status(500).send('no hauls found').end();
            } else {
                res.status(200).send(job).end();
            }
        });
});
router.get('/currentJob/:id', function(req, res) {
    hauls.findOne({
            'bidAccepted.from': req.params.id
        },
        function(err, job) {
            if (err) throw err;
            if (!job) {
                res.status(500).send('no jobs found').end();
            } else {
                res.status(200).send(job).end();
            }
        });
});
router.delete('/cancelHaul/:haulId', function(req, res) {
    console.log(req.params.haulId);
    hauls.findOneAndRemove({
        '_id': req.params.haulId
    }, function(err) {
        if (err) {
            res.status(500).send('Internal error');
        } else {
            req.io.emit('JobDeleted', req.params.haulId);
            res.status(200).send('Deleted event');
        }
        res.end();
    });
});
module.exports = router;