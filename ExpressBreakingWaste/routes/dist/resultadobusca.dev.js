"use strict";

var express = require('express');

var router = express.Router();

var Resultadobusca_Controller = require('../controllers/Resultadobusca_Controller');

router.get('/resultadobusca', Resultadobusca_Controller.resultadobusca);
module.exports = router;