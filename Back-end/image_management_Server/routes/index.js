var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get( '/about', function( req, res, next ) {
  res.render( 'about', {
    title: 'About',
    name: 'Your Name',
    description: 'This is a description of the site.'
  });
});

module.exports = router;