var Entre_Controller = require('../controllers/Entre_Controller');

let entre = function(router) {
    router.get('/', Entre_Controller.entre);
    router.post('/', Entre_Controller.logar);
}
  
module.exports = entre;