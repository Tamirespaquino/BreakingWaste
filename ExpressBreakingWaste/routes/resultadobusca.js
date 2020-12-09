var Resultadobusca_Controller = require('../controllers/Resultadobusca_Controller');

let resultadobusca = function(router){
    router.get('/resultadobusca', Resultadobusca_Controller.resultadobusca);
}

module.exports = resultadobusca;
