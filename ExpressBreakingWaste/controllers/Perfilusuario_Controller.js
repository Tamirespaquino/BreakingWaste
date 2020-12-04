var path = require('path');
var fs = require('fs');
const { createInflateRaw } = require('zlib');


module.exports = {
    entre: function(req, res, next) {
        res.render('/views/entre');
    },

    visualizar: function(req, res, next) {
        let empresa = empresas.find((empresa) => {
            empresas.id == id;
            res.render('/empresa/visualizar');
        });

        res.redirect('/views/entre');
    },

    editar: function(req, res, next) {
        let empresa = empresas.find((empresa) => {
            empresas.id == id;
        })

        empresas.get('/empresa/editar', function(req, res, next) {
            const id = req.params.id;
        
            let empresa = empresas.find(empresa => empresas.id == id);
        
            res.render('empresa/editar', {empresa});
        });

        empresas.put('/empresa/alterar', function(req, res, next) {
            const id = req.params.id;
            let empresa = empresas.find(empresa => empresa.id == id);
            usuario = req.body.usuario;
            nome = req.body.nome;
            cnpj = req.body.cnpj;
            email = req.body.email;
            telefone = req.body.telefone;
            profissao = req.body.profissao;
            parceira = req.body.parceira;
            residuo = req.body.residuo;
            endereco = req.body.endereco;
                   
            res.redirect('/empresa');
        });
    },

    deletar:

    criar:

    guardar:

    
}    