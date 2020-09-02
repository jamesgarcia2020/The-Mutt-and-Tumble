var express = require('express');
var router = express.Router();
const appointmentsCtrl = require('../controllers/appointments');


/* GET users listing. */


router.get('/', appointmentsCtrl.index);
router.get('/new', appointmentsCtrl.new);
router.get('/:id', appointmentsCtrl.show);
router.post('/', appointmentsCtrl.create)



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;
