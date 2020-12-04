var Home_Controller = require('../controllers/Home_Controller');

let home = function(router) {
    router.get('/', Home_Controller.home);
}
  
module.exports = home;
