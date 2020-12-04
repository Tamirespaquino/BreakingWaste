var express = require('express');
var router = express.Router();
var Contato_Controller = require('../controllers/Contato_Controller');
 
router.get('/contato', Contato_Controller.contato);
router.post('/enviarMensagem', Contato_Controller.enviarmensagem);

module.exports = router