"use strict";

var path = require('path');

var fs = require('fs');

var Residuos_Controller = {
  residuos: function residuos(req, res) {
    res.render('residuos');
  }
};
module.exports = Residuos_Controller;