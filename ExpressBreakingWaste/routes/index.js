var express = require('express');
const app = require('../app');
var router = express.Router();
var cadastrese = require('./cadastrese');
//var carrinho = require('./carrinho');
var contato = require('./contato');
var entre = require('./entre');
var home = require('./home');
var perfil = require('./perfilusuario');
var quemsomos = require('./quemsomos');
var residuos = require('./residuos');
var resultado = require('./resultadobusca');


cadastrese(router)
//carrinho(router)
contato(router)
entre(router)
home(router)
perfil(router)
quemsomos(router)
residuos(router)
resultado(router)

module.exports = router;
