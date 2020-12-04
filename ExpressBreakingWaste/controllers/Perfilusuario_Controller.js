var path = require('path');
var fs = require('fs');
const { createInflateRaw } = require('zlib');


module.exports = {
    entre: function(req, res, next) {
        res.render('/views/entre');
    },

    visualizar: function(req, res, next) {
        let empresa = empresas.findAll((empresa) => {
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
                   
            res.redirect('/views/entre');
        });
    },

    //deletar:

    //criarUser: precisa desse? Pra mim, guardar e criar são as mesmas coisas

    guardarUser: function (req, res, next) {
        let json_empresa = fs.readFileSync(path.join(_dirname, '..', 'data', 'empresas.json'));

        empresas.push({
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

        let novo_json_empresas = JSON.stringify(empresas)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_empresas);
        res.send('Operação efetuada com sucesso!');
    },

    
}    