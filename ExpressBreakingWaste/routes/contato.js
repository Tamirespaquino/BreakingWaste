var Contato_Controller = require('../controllers/Contato_Controller');

let contato = function(router) {
    router.get('/', Contato_Controller.contato);
    router.post('/', Contato_Controller.enviarMensagem);
}
  
module.exports = contato;