var Entre_Controller = require('../controllers/Entre_Controller');

let entre = function(router) {
    router.get('/entre', Entre_Controller.entre);
    router.post('/entre', Entre_Controller.logar);
}
  
module.exports = entre;