var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/perfil_usuario', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/perfil_usuario', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.put('/perfil_usuario', function(req, res, next) {
   res.render('index', { title: 'Express' });
  });

router.delete('/perfil_usuario', function(req, res, next) {
    res.render('index', { title: 'Express' });
   });  

module.exports = router;