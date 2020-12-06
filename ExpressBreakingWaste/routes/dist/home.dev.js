"use strict";

var Home_Controller = require('../controllers/Home_Controller');

var home = function home(router) {
  router.get('/', Home_Controller.home);
  router.get('/busca', Home_Controller.busca);
};

module.exports = home;