// var path = require('path');
// var fs = require('fs');
// var bodyParser = require('body-parser');
// const { createInflateRaw } = require('zlib');
let bcrypt = require('bcrypt');
const { Usuario_cadastrado } = require('../models')
const { Orcamento } = require('../models')
const { Pedido } = require('../models')



module.exports = {
    entre: function (req, res, next) {
        res.render('perfilusuario');
    },

    visualizarempresa: function (req, res, next) {
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);
        res.render('perfilusuario/mostrar', { empresa });
    },


    editar: ('/perfilusuario', function (req, res, next) { //igual app.get /cad-pagamento
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);
        res.render('perfilusuario/editar', { empresa });
    }),

    alterar: ('/add-formUsuario', function (req, res, next) { //igual app.post /add-pagamento
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);

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

    deletar: function (req, res, next) {
        const id = req.params.id;
        const perfil = empresas.findIndex((empresa) => empresa.id == id);

        if (perfil === -1) return res.redirect('/perfilususario');

        empresas.splice(perfil, 1);

        res.redirect('/perfilusuario');
    },

    criarnovo: function (req, res, next) {
        res.render('perfilusuario/criar');
    },

    guardarnovo: function (req, res, next) {
        let { email,
            senha,
            razao,
            cnpj,
            telefone,
            endereco,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            cep,
            funcionamento,
            tipousuario,
            quantidadebombinas,
            tamanhobombinas,
            tiposresiduos } = res.body;

        empresas.push({
            id: empresas.reverse()[0].id + 1,
            email,
            senha,
            razao,
            cnpj,
            telefone,
            endereco,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            cep,
            funcionamento,
            tipousuario,
            quantidadebombinas,
            tamanhobombinas,
            tiposresiduos
        })

        res.redirect('/perfilusuario');
    },

    user: ('/add-formUsuario', function(req, res) {
        res.render('perfilusuario');
    },
     ('/add-formUsuario', function(req, res) {
        res.send("Nome: " + req.body.nome);
        res.send("E-mail: " + req.body.email);

    })

    )
        
}
