var express = require('express');
var router = express.Router();
var Contato_Controller = require('../controllers/Contato_Controller');
 
router.get('/', Contato_Controller.contato);
router.post('/', Contato_Controller.enviarMensagem);

module.exports = router