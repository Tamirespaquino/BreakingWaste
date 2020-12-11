let path = require('path');
let fs = require('fs');
let bcrypt = require('bcrypt');

const { Usuario } = require('../models')

module.exports = {

    cadastro: function (req, res, next) {
        res.render('cadastrese');
    },

    guardarEmpresa: async function (req, res, next) {
        const salt = bcrypt.genSaltSync(10);
        const password_hashed = bcrypt.hashSync(req.body.password, salt);

        await Usuario.create({
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
        })
        res.redirect('/entre');
    },
}
