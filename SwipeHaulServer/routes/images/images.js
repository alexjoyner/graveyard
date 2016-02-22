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
router.post('/uploadImage', function(req, res) {
    // Logs for testing
    var file = req.file;
    console.log(file);
    console.log('file.name ', file.filename);
    console.log('file.path ', file.path);

    //Create a file stream
    var stream = fs.createReadStream(file.path);

    //writeFile calls putObject behind the scenes
    s3fsImpl.writeFile(file.filename, stream).then(function() {
        fs.unlink(file.path, function(err) {
            if (err) {
                console.error(err);
            }
        });
        res.status(200).send(file.filename).end();
    });
});
router.get('/:name', function(req, res) {
    // Logs for testing
    var file = req.params.name;

    //writeFile calls putObject behind the scenes
    s3fsImpl.readFile(file, function(err, data){
        if(err) throw err;
        res.send(data);
        res.end();
    });
});
module.exports = router;