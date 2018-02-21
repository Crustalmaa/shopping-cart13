var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gmail', function(req, res, next){
    res.render('gmailSignin.hbs', {title: 'gmail'});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
