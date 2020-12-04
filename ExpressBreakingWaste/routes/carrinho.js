var Carrinho_Controller = require('../controllers/Carrinho_Controller');

let carrinho = function(router) {
    router.get('/', Carrinho_Controller.lista);
}
 
module.exports = carrinho