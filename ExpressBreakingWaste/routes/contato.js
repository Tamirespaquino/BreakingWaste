var express = require('express');
var router = express.Router();
var Contato_Controller = require('..controllers/Contato_Controller');
 
router.get('/contato', Contato_Controller.contato);
router.post('/contato', Contato_Controller.enviarMensagem);

module.exports = router