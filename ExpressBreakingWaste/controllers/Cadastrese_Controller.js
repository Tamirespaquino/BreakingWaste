let path = require('path');
let fs = require('fs');
let bcrypt = require('bcrypt');

module.exports = {

    cadastro: function (req, res, next) {
        res.render('cadastrese');
    },

    guardarEmpresa: function (req, res, next) {
        let json_empresa = fs.readFileSync(path.join(__dirname, '..', 'data', 'empresas.json'));
        let empresas = JSON.parse(json_empresa);
        const salt = bcrypt.genSaltSync(10);
        const password_hashed = bcrypt.hashSync(req.body.password, salt);

        empresas.push({
            email: req.body.email,
            senha: password_hashed,
            confirmarsenha: password_hashed,
            razao: req.body.razaoSocial,
            cnpj: req.body.cnpj,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            numero: req.body.numero,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep,
            funcionamento: req.body.funcionamento,
            tipousuario: req.body.tipousuario,
            quantidadebombonas: req.body.quantidadebombonas,
            tamanhobombonas: req.body.tamanhobombonas,
            tiposresiduos: req.body.tiposresiduos,
        });

        let novo_json_empresas = JSON.stringify(empresas)
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'empresas.json'), novo_json_empresas);
        res.send('Operação efetuada com sucesso!');
    },
}
