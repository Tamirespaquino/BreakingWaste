var Perfilusuario_Controller = require('../controllers/Perfilusuario_Controller');

let perfil = function(router) {
    router.get('/perfil', Perfilusuario_Controller.entre);
    router.get('/perfil', Perfilusuario_Controller.visualizarempresa);
    router.get('/perfil', Perfilusuario_Controller.editar);
    router.put('/perfil', Perfilusuario_Controller.alterar);
    router.put('/perfil', Perfilusuario_Controller.deletar);
    router.get('/perfil', Perfilusuario_Controller.criarnovo);
    router.post('/perfil', Perfilusuario_Controller.guardarnovo);

}
  
module.exports = perfil;