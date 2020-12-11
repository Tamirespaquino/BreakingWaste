"use strict";

var Home_Controller = require('../controllers/Home_Controller');

var models = require('../models');

var home = function home(router) {
  router.get('/', Home_Controller.home);
  router.get('/busca', Home_Controller.busca);
  router.get('/criadb', function _callee(req, res) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // await models.Usuario.sync({force: true});
            // await models.Pedido.sync({force: true})
            // await models.Orcamento.sync({force: true})
            res.send("concluido");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

module.exports = home;