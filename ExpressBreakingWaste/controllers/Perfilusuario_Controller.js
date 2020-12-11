// var path = require('path');
// var fs = require('fs');
// var bodyParser = require('body-parser');
// const { createInflateRaw } = require('zlib');
let bcrypt = require('bcrypt');
const { Usuario } = require('../models')
const { Orcamento } = require('../models')
const { Pedido } = require('../models')



module.exports = {
   
    visualizarempresa: function (req, res, next) {
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);
        res.render('perfilusuario/mostrar', { empresa });
    },

    editar: ('/perfilusuario', function (req, res, next) { 
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);
        res.render('perfilusuario/editar', { empresa });
    }),

    alterar: ('/cadastrese', function (req, res, next) { 
        const id = req.params.id;
        const empresa = empresa.find(empresa => empresa.id == id);

        nome = req.body.nome;
        email = req.body.email;
        senha = password_hashed;
        razao = req.body.razaoSocial;
        cnpj = req.body.cnpj;
        telefone = req.body.telefone;
        endereco = req.body.endereco;
        numero = req.body.numero;
        bairro = req.body.bairro;
        complemento = req.body.complemento;
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

    user: function(req, res) {
        const { usuario } = req.session;
        console.log(usuario);
        res.render('perfilusuario', { usuario });
    }
            

}
