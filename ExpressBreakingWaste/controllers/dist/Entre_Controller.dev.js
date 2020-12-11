"use strict";

var path = require('path');

var fs = require('fs');

var bcrypt = require('bcrypt');

var _require = require('../models'),
    Usuario = _require.Usuario;

module.exports = {
  entre: function entre(req, res, next) {
    res.render('entre');
  },
  logar: function logar(req, res) {
    var _req$body, username, password, user, senhaValida;

    return regeneratorRuntime.async(function logar$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 3;
            return regeneratorRuntime.awrap(Usuario.findOne({
              where: {
                username: username
              }
            }));

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.redirect('/entre'));

          case 6:
            senhaValida = bcrypt.compareSync(password, user.password);

            if (senhaValida) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.redirect('/entre'));

          case 9:
            user.password = undefined;
            req.session.usuario = user;
            return _context.abrupt("return", res.json(user));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};