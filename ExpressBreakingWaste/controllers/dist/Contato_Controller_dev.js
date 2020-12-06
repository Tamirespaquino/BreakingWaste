"use strict";

var path = require('path');

var fs = require('fs');

module.exports = {
  contato: function contato(req, res, next) {
    res.render('contato');
  },
  enviarMensagem: function enviarMensagem(req, res, next) {
    var json_mensagens = fs.readFileSync(path.join(_dirname, '..', 'data', '.json_mensagens'));
    empresas.push({
      nome: req.body.nome,
      email: req.body.email,
      assunto: req.body.assunto,
      mensagem: req.body.mensagem
    });
    var novo_json_mensagens = JSON.stringify(mensagens);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_mensagens);
    res.send('Recebemos sua mensagem!');
  }
};