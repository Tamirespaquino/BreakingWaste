var express = require('express');
var router = express.Router();
var Cadastrese_Controller = require('..controllers/Cadastrese_Controller');


router.get('/cadastrese', Cadastrese_Controller.cadastro);
router.post('/cadastrese', Cadastrese_Controller.guardarEmpresa);
  
module.exports = router