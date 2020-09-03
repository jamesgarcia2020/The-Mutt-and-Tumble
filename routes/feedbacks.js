const express = require('express');
 const router = express.Router();
 const feedbacksCtrl = require('../controllers/feedbacks');
const { route } = require('./appointments');
 
 router.post('/appointments/:id/feedbacks', isLoggedIn, feedbacksCtrl.create);
 router.delete('/feedbacks/:id', feedbacksCtrl.delete);

 function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
 
 module.exports = router;