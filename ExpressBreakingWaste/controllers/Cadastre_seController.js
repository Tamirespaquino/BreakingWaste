let path = require('path');

let fs = require('fs');

let bcrypt = require('bcrypt');

module.exports = {
    cadastro: function(req, res, next) {
        res.render('views/cadastre_se');
    },
    
      guardarEmpresa: function(req, res, next) {
        let json_empresa = fs.readFileSync(path.join(_dirname, '..', 'data', 'usuarios.json'));
        
        empresas.push({
            email: req.body.email,
            password: password_hashed,
            password: password_hashed,
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
            funcionamento: req.body.funcionamento    
        });

        let novo_json_empresas = JSON.stringify(empresas)
        fs.writeFileSync(path.join(__dirname, '..','data', 'empresas.json'), novo_json_empresas);
        res.send('Operação efetuada com sucesso!');
    },
}
