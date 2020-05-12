'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// !! route = '/votes'

// ###########  POSTS  ###############
// Post vote for issue
router.post('/create', jwt_verify, function(req, res) {
    console.log('REQ: ', req.body);
    res.status(500).send({
        message: 'Create vote not set up yet',
        req: req.body
    }).end();
    // Step 1: 
        // NO 
            // Step 2: Create a couter for responses
            // Step 3: Create new vote for user on issue
            // Step 4: Modify score in isues
        // YES 
            // Step 2: Error, already voted

/*    votes
        .findOne({ // Step 1
            $and: [{
                'userId': profile.id
            },{
                'itemId': issueId
            }]
        })
        .exec(function(err, vote){
            if(err) throw err;
            if(vote){ // Step 1.YES
                res.status(500).send('Vote already cast').endl;
            }else{ // Step 1.NO
                var newVote = new votes();
                newVote.itemId = issueId;
                newVote.itemType = 1;
                newVote.userId = profile.id;
                newVote.voteType = voteType;
                newVote.save(function(err){
                    if(err) throw err;
                    issues // Step 1.4
                        .findOneAndUpdate(query, incOrder)
                        .select('ups downs')
                        .exec(function(err, issue) {
                            if (err) throw err;
                            if (!issue) {
                                res.status(500).send('No Issue Found');
                            } else {
                                res.status(200).send(voteType + ' successful').end();
                            }
                        });
                })
                

            }
        })*/
    
});
module.exports = router;