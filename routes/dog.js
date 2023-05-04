var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results dog' });
});
var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();
const secured = (req, res, next) => {
  if(req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
}
/* GET dogs */
router.get('/', dog_controlers.dog_view_all_Page );

router.get('/detail', secured, dog_controlers.dog_view_one_Page);

router.get('/create', secured, dog_controlers.dog_create_Page);

router.get('/update',secured, dog_controlers.dog_update_Page);

router.get('/delete', secured, dog_controlers.dog_delete_Page);
module.exports = router;
