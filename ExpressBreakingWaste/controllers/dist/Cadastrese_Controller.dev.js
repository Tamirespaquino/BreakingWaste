"use strict";

var path = require('path');

var fs = require('fs');

var bcrypt = require('bcrypt');

module.exports = {
  cadastro: function cadastro(req, res, next) {
    res.render('cadastrese');
  },
  guardarEmpresa: function guardarEmpresa(req, res, next) {
    var json_empresa = fs.readFileSync(path.join(_dirname, '..', 'data', 'empresas.json'));
    empresas.push({
      email: req.body.email,
      senha: password_hashed,
      confirmarsenha: password_hashed,
      razao: req.body.razaoSocial,
      cnpj: req.body.cnpj,
      telefone: req.body.cnpj,
      endereco: req.body.endereco,
      numero: req.body.endereco,
      bairro: req.body.bairro,
      complemento: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      funcionamento: res.body.funcionamento,
      tipousuario: req.body.tipousuario,
      quantidadebombonas: req.body.quantidadebombonas,
      tamanhobombonas: req.body.tamanhobombonas,
      tiposresiduos: req.body.tiposresiduos
    });
    var novo_json_empresas = JSON.stringify(empresas);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_empresas);
    res.send('Operação efetuada com sucesso!');
  }
};