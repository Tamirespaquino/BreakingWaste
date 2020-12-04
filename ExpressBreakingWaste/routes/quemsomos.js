var express = require('express');
var router = express.Router();
var Quemsomos_Controller = require('../controllers/Quemsomos_Controller');

<<<<<<< HEAD
router.get('/quemsomos', Quemsomos_Controller.quemsomos);
=======
router.get('/quemsomos', Quemsomos_Controller);
>>>>>>> 30598e3542f00076b25aad62ce595d765402c364
  
module.exports = router;