'use strict';
var express = require('express'),
    router = express.Router();

// Mongoose models
var issues = require('../../models/issueModel.js');

// !! route = '/pros'

// ###########  GETS  ###############
// get pros set by id
router.get('/getPros/:id', function(req, res){
	issues
		.findOne({
			'_id': req.params.id
		})
		.select('pros')
		.exec(function(err, pros){
			if(err) throw err;
			if(!pros)
				res.status(500).send('No Pros Found').end();
			if(pros)
				res.status(200).send(pros).end();

		});
});
// ###########  POSTS  ###############
// post new pro set
router.post('/createPro', function(req, res){
	console.log('Create pro: ', req.body);
	issues.findOne({
            '_id': req.body.issueId
        },
        function(err, anIssue) {
            if (err) throw err;
            if (!anIssue) {
                res.status(500).send('no issues found').end();
            } else {
                anIssue.pros.push(req.body.newPointData);
                anIssue.save(function(err) {
                    if (err) throw err;
                    res.status(200).send(anIssue).end();
                });
            }
        });
});
// post update to pro

// ###########  DELETES  ###############
// delete pro by id

module.exports = router;
