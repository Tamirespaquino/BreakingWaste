var express = require('express');
var router = express.Router();
var Entre_Controller = require('../controllers/Entre_Controller');

router.get('/', Entre_Controller.entre);
router.post('/', Entre_Controller.logar);
  
module.exports = router