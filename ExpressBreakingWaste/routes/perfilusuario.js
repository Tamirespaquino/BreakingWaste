var Perfilusuario_Controller = require('../controllers/Perfilusuario_Controller');

let perfil = function(router) {
    router.get('/perfil', Perfilusuario_Controller.entre);
    // router.get('/perfil', Perfilusuario_Controller.visualizar);
    router.put('/perfil', Perfilusuario_Controller.editar);
    router.post('/perfil', Perfilusuario_Controller.guardarUser);
}
  
module.exports = perfil;