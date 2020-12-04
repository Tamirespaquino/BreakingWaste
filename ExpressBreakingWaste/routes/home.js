var express = require('express');
var router = express.Router();
var Home_Controller = require('../controllers/Home_Controller');

router.get('/', Home_Controller.home);
router.get('/', Home_Controller.busca);
  
module.exports = router;