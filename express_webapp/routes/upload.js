var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var fileupload = require("express-fileupload");
var multer = require('multer');

router.get('/', function(req, res, next) {
    res.render('upload');
});

router.post('/', function(req, res) {
    console.log(req.files); // the uploaded file object
});
module.exports = router;
