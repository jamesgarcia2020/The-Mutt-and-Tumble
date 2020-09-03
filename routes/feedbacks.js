const express = require('express');
 const router = express.Router();
 const feedbacksCtrl = require('../controllers/feedbacks');
const { route } = require('./appointments');
 
 router.post('/appointments/:id/feedbacks', feedbacksCtrl.create);
 router.delete('/feedbacks/:id', feedbacksCtrl.delete);
 
 module.exports = router;