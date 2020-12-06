"use strict";

var _require = require('../models'),
    Usuario_cadastrado = _require.Usuario_cadastrado; // puxar a model orcamento


var Home_Controller = {
  home: function home(req, res) {
    res.render('home');
  },
  busca: function busca(req, res) {
    var campos, busca;
    return regeneratorRuntime.async(function busca$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            campos = req.query;
            _context.next = 3;
            return regeneratorRuntime.awrap(Usuario.findAll({
              where: {
                tipoderesiduos: campos.tiposderesiduos,
                tamanhobombinas: campos.tamanhobombonas,
                quantidadebombonas: campos.tamanhobombonas
              },
              like: {
                cep: campos.cep
              } // if para retornar somente usuários do tipo "quero retirar"

            }));

          case 3:
            busca = _context.sent;
            return _context.abrupt("return", res.render('resultadobusca', {
              busca: busca
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
module.exports = Home_Controller;