var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cadastre_se', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cadastre_se', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;