const { Usuario_cadastrado } = require('../models')

const Home_Controller = {
    home: (req, res) => {
        res.render('home')
    },

    busca: async (req, res) => {
        const campos = req.query
        const busca = await Usuario_cadastrado.findAll({
            where: {
                tipoderesiduos: campos.tiposderesiduos,
                tamanhobombinas: campos.tamanhobombonas,
                quantidadebombonas: campos.tamanhobombonas,
            },
            like: {
                cep: campos.cep
            }
        }
        );
        return res.render('resultadobusca', {busca})
    }
}

module.exports = Home_Controller;
