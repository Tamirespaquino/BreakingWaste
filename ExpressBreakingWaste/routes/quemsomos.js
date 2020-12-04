var express = require('express');
var router = express.Router();
var Quemsomos_Controller = require('../controllers/Quemsomos_Controller');

router.get('/quemsomos', Quemsomos_Controller.quemsomos);

module.exports = router;