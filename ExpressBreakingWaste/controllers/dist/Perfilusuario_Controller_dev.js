"use strict";

var path = require('path');

var fs = require('fs');

var _require = require('zlib'),
    createInflateRaw = _require.createInflateRaw;

module.exports = {
  entre: function entre(req, res, next) {
    res.render('/entre');
  },
  visualizar: function visualizar(req, res, next) {
    var empresa = empresas.findAll(function (empresa) {
      empresas.id == id;
      res.render('/empresa/visualizar');
    });
    res.redirect('/entre');
  },
  editar: function editar(req, res, next) {
    var empresa = empresas.find(function (empresa) {
      empresas.id == id;
    });
    empresas.get('/empresa/editar', function (req, res, next) {
      var id = req.params.id;
      var empresa = empresas.find(function (empresa) {
        return empresas.id == id;
      });
      res.render('empresa/editar', {
        empresa: empresa
      });
    });
    empresas.put('/empresa/alterar', function (req, res, next) {
      var id = req.params.id;
      var empresa = empresas.find(function (empresa) {
        return empresa.id == id;
      });
      usuario = req.body.usuario;
      nome = req.body.nome;
      cnpj = req.body.cnpj;
      email = req.body.email;
      telefone = req.body.telefone;
      profissao = req.body.profissao;
      parceira = req.body.parceira;
      residuo = req.body.residuo;
      endereco = req.body.endereco;
      res.redirect('/entre');
    });
  },
  //deletar:
  //criarUser: precisa desse? Pra mim, guardar e criar são as mesmas coisas
  guardarUser: function guardarUser(req, res, next) {
    var json_empresa = fs.readFileSync(path.join(_dirname, '..', 'data', 'empresas.json'));
    empresas.post({
      email: req.body.email,
      cnpj: req.body.cnpj,
      telefone: req.body.cnpj,
      endereco: req.body.endereco,
      numero: req.body.endereco,
      bairro: req.body.bairro,
      complemento: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      funcionamento: res.body.funcionamento
    });
    var novo_json_empresas = JSON.stringify(empresas);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_empresas);
    res.send('Operação efetuada com sucesso!');
  }
};