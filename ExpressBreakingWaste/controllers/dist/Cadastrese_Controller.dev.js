"use strict";

var path = require('path');

var fs = require('fs');

var bcrypt = require('bcrypt');

var _require = require('../models'),
    Usuario = _require.Usuario;

module.exports = {
  cadastro: function cadastro(req, res, next) {
    res.render('cadastrese');
  },
  guardarEmpresa: function guardarEmpresa(req, res, next) {
    var salt, password_hashed;
    return regeneratorRuntime.async(function guardarEmpresa$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            salt = bcrypt.genSaltSync(10);
            password_hashed = bcrypt.hashSync(req.body.password, salt);
            _context.next = 4;
            return regeneratorRuntime.awrap(Usuario.create({
              username: req.body.email,
              email: req.body.email,
              password: password_hashed,
              razao_social: req.body.razaoSocial,
              cnpj: req.body.cnpj,
              telefone: req.body.telefone,
              endereco: req.body.endereco,
              numero: req.body.numero,
              bairro: req.body.bairro,
              complemento: req.body.complemento,
              cidade: req.body.cidade,
              estado: req.body.estado,
              cep: req.body.cep,
              situacaofuncionamento: req.body.funcionamento,
              tipousuario: req.body.tipousuario,
              quantidadebombonas: req.body.quantidadebombonas,
              tamanhobombonas: req.body.tamanhobombonas,
              tiporesiduos: req.body.tiposresiduos
            }));

          case 4:
            res.redirect('/entre');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};