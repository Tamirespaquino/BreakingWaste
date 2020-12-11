var Home_Controller = require('../controllers/Home_Controller');
const models = require('../models')

let home = function(router) {
    router.get('/', Home_Controller.home);
    router.get('/busca', Home_Controller.busca);
    router.get('/criadb', async (req, res) => {
        // await models.Usuario.sync({force: true});
        // await models.Pedido.sync({force: true})
        // await models.Orcamento.sync({force: true})

        res.send("concluido")
    })
}

module.exports = home;
