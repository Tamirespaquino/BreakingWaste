const { guardarEmpresa } = require("./Cadastre_seController");

const EntreController = {
    entre(req, res, next) {
        let id = req.body.email;
        let senha = password_hashed;
        return res.render('/perfil_usuario', {id, senha})
    },   
}

module.exports = ProdutoController;
