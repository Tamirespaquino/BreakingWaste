"use strict";

var express = require('express');

var app = require('../app');

var router = express.Router();

var cadastrese = require('./cadastrese'); //var carrinho = require('./carrinho');


var contato = require('./contato');

var entre = require('./entre');

var home = require('./home');

var perfil = require('./perfilusuario');

var quemsomos = require('./quemsomos');

var residuos = require('./residuos');

var resultado = require('./resultadobusca');

var authMiddleware = require('../middlewares/auth');

cadastrese(router);
entre(router);
home(router);
quemsomos(router);
residuos(router); //carrinho(router)

router.use(authMiddleware);
contato(router);
perfil(router);
resultado(router);
module.exports = router;