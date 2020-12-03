var express = require('express');
var router = express.Router();
var Cadastrese_Controller = require('../controllers/Cadastrese_Controller');


router.get('/', Cadastrese_Controller.cadastro);
router.post('/', Cadastrese_Controller.guardarEmpresa);
  
module.exports = router