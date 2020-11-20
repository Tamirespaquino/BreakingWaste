//Duas rotas: uma get e uma post

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/home', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;

//Só precisa de update e delete caso usuário precise atualizar ou deletar informações sobre ele. Se não, não tem necessidade.
