var Home_Controller = require('../controllers/Home_Controller');

let home = function(router) {
    router.get('/', Home_Controller.home);
    router.get('/busca', Home_Controller.busca);
}
  
module.exports = home;
