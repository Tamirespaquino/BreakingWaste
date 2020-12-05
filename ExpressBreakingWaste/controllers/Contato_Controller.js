let path = require('path');
let fs = require('fs');

module.exports = {

    contato: function (req, res, next) {
        res.render('views/contato');
    },

    enviarmensagem: function (req, res, next) {
        let json_mensagens = fs.readFileSync(path.join(_dirname, '..', 'data', '.json_mensagens'));

        empresas.push({
            nome: req.body.nome,
            email: req.body.email,
            assunto: req.body.assunto,
            mensagem: req.body.mensagem,
        });

        let novo_json_mensagens = JSON.stringify(mensagens)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_mensagens);
        res.send('Recebemos sua mensagem!');
    },
}