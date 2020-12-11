var Perfilusuario_Controller = require('../controllers/Perfilusuario_Controller');
var bodyParser = require('body-parser');
const Entre_Controller = require('../controllers/Entre_Controller');

let perfil = function(router) {
    router.get('/perfil', Perfilusuario_Controller.user);
    router.get('/perfil', Perfilusuario_Controller.visualizarempresa);
    router.get('/perfil', Perfilusuario_Controller.editar);
    router.post('/perfil', Perfilusuario_Controller.alterar);
    router.put('/perfil', Perfilusuario_Controller.deletar);
    router.get('/perfil', Perfilusuario_Controller.criarnovo);
    router.post('/perfil', Perfilusuario_Controller.user);
    router.get('/logout', Entre_Controller.logout);

}
  
module.exports = perfil;