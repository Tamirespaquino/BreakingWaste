var express = require('express');
var router = express.Router();
var Residuos_Controller = require('../controllers/Residuos_Controller');

router.get('/residuos', Residuos_Controller.residuos);
  
module.exports = router;