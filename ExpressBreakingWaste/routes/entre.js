var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/entre', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/entre', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;