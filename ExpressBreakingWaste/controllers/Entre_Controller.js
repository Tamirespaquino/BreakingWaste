var path = require('path');
var fs = require('fs');
var bcrypt = require('bcrypt');

module.exports = {
    entre: function(req, res, next) {
        res.render('/views/entre');
    },

    logar: function(req, res) {
        const diretorio_empresas_json = path.join(__dirname, '..', 'data', 'empresas.json');
        let json_empresas = fs.readFileSync(diretorio_empresas_json);
        let empresas = JSON.parse(json_empresas);
    
        let empresa = empresas.find((empresa) => {
            return empresa.email.toLowerCase() === req.body.email.toLowerCase()
        });
    
        if (empresa == null) {
            res.send("Perfil não encontrado.");
        } 
    
        bcrypt.compare(req.body.senha, usuario.senha).then(function(err, response) {
            console.log("ERROR:", err);
            console.log("RESPONSE:", response);
        });
    
        res.redirect('/views/entre');
    }
}
