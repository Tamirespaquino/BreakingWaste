var path = require('path');
var fs = require('fs');
const { createInflateRaw } = require('zlib');


module.exports = {
    entre: function(req, res, next) {
        res.render('perfil_usuario');
    },

    visualizar: function(req, res, next) {
        let empresa = empresas.findAll((empresa) => {
            empresas.id == id;
            res.render('perfil_usuario');
        });

        res.redirect('perfil_usuario');
    },


    editar: function(req, res, next) {
        let empresa = empresas.find((empresa) => {
            empresas.id == id;
        })

        empresas.get('editar', function(req, res, next) {
            const id = req.params.id;
        
            let empresa = empresas.find(empresa => empresas.id == id);
        
            res.render('perfil_usuario', {empresa});
        });

        empresas.put('editar', function(req, res, next) {
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
                   
            res.redirect('perfil_usuario');
        });
    },

    //deletar:

    //criarUser: precisa desse? Pra mim, guardar e criar são as mesmas coisas

    guardarUser: function (req, res, next) {
        let json_empresa = fs.readFileSync(path.join(_dirname, '..', 'data', 'empresas.json'));

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

        let novo_json_empresas = JSON.stringify(empresas)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_empresas);
        res.send('Operação efetuada com sucesso!');
    },

    
}    