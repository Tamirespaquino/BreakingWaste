"use strict";

var Entre_Controller = require('../controllers/Entre_Controller');

var entre = function entre(router) {
  router.get('/', Entre_Controller.entre);
  router.post('/', Entre_Controller.logar);
};

module.exports = entre;