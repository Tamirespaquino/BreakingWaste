var Carrinho_Controller = require('../controllers/Carrinho_Controller');

let carrinho = function(router) {
    router.get('/carrinho', Carrinho_Controller.lista);
}
 
module.exports = carrinho;