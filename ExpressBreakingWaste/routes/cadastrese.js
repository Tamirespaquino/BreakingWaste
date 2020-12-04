var Cadastrese_Controller = require('../controllers/Cadastrese_Controller');

let cadastrese = function (router) {
    router.get('/cadastrese', Cadastrese_Controller.cadastro);
    router.post('/cadastrese', Cadastrese_Controller.guardarEmpresa);
}
module.exports = cadastrese;