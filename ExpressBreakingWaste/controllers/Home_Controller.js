const { Usuario_cadastrado } = require('../models')
// puxar a model orcamento

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
        // if para retornar somente usuários do tipo "quero retirar"
        }
        );
        // busca para orcamento
        return res.render('resultadobusca', {busca})
    }
}

module.exports = Home_Controller;
