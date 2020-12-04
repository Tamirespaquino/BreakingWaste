var Quemsomos_Controller = require('../controllers/Quemsomos_Controller');

let quemsomos = function(router){
    router.get('/quemsomos', Quemsomos_Controller.quemsomos);
}

module.exports = quemsomos;