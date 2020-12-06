"use strict";

var path = require('path');

var fs = require('fs');

var bcrypt = require('bcrypt');

module.exports = {
  entre: function entre(req, res, next) {
    res.render('entre');
  },
  logar: function logar(req, res) {
    var diretorio_empresas_json = path.join(__dirname, '..', 'data', 'empresas.json');
    var json_empresas = fs.readFileSync(diretorio_empresas_json);
    var empresas = JSON.parse(json_empresas);
    var empresa = empresas.find(function (empresa) {
      return empresa.email.toLowerCase() === req.body.email.toLowerCase();
    });

    if (empresa == null) {
      res.send("Perfil não encontrado.");
    }

    bcrypt.compare(req.body.senha, usuario.senha).then(function (err, response) {
      console.log("ERROR:", err);
      console.log("RESPONSE:", response);
    });
    res.redirect('entre');
  }
};