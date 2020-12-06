"use strict";

var Carrinho_Controller = require('../controllers/Carrinho_Controller');

var carrinho = function carrinho(router) {
  router.get('/carrinho', Carrinho_Controller.lista);
};

module.exports = carrinho;