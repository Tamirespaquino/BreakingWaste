router.get('/resultadobusca', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post('/resultadobusca', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });