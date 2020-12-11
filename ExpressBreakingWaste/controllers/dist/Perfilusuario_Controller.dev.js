"use strict";

// var path = require('path');
// var fs = require('fs');
// var bodyParser = require('body-parser');
// const { createInflateRaw } = require('zlib');
var bcrypt = require('bcrypt');

var _require = require('../models'),
    Usuario = _require.Usuario;

var _require2 = require('../models'),
    Orcamento = _require2.Orcamento;

var _require3 = require('../models'),
    Pedido = _require3.Pedido;

module.exports = {
  entre: function entre(req, res, next) {
    res.render('perfilusuario');
  },
  visualizarempresa: function visualizarempresa(req, res, next) {
    var id = req.params.id;
    var empresa = empresa.find(function (empresa) {
      return empresa.id == id;
    });
    res.render('perfilusuario/mostrar', {
      empresa: empresa
    });
  },
  editar: ('/perfilusuario', function (req, res, next) {
    //igual app.get /cad-pagamento
    var id = req.params.id;
    var empresa = empresa.find(function (empresa) {
      return empresa.id == id;
    });
    res.render('perfilusuario/editar', {
      empresa: empresa
    });
  }),
  alterar: ('/add-formUsuario', function (req, res, next) {
    //igual app.post /add-pagamento
    var id = req.params.id;
    var empresa = empresa.find(function (empresa) {
      return empresa.id == id;
    });
    nome = req.body.nome;
    email = req.body.email;
    senha = password_hashed;
    razao = req.body.razaoSocial;
    cnpj = req.body.cnpj;
    telefone = req.body.cnpj;
    endereco = req.body.endereco;
    numero = req.body.endereco;
    bairro = req.body.bairro;
    complemento = req.body.bairro;
    cidade = req.body.cidade;
    estado = req.body.estado;
    cep = req.body.cep;
    funcionamento = res.body.funcionamento;
    tipousuario = req.body.tipousuario;
    quantidadebombonas = req.body.quantidadebombonas;
    tamanhobombonas = req.body.tamanhobombonas;
    tiposresiduos = req.body.tiposresiduos;
  }),
  deletar: function deletar(req, res, next) {
    var id = req.params.id;
    var perfil = empresas.findIndex(function (empresa) {
      return empresa.id == id;
    });
    if (perfil === -1) return res.redirect('/perfilususario');
    empresas.splice(perfil, 1);
    res.redirect('/perfilusuario');
  },
  criarnovo: function criarnovo(req, res, next) {
    res.render('perfilusuario/criar');
  },
  user: ('/add-formUsuario', function (req, res) {
    res.render('perfilusuario');
  }, ('/add-formUsuario', function (req, res) {
    res.send("Nome: " + req.body.nome);
    res.send("E-mail: " + req.body.email);
  }))
};