const express = require('express');
 const router = express.Router();
 const feedbacksCtrl = require('../controllers/feedbacks');
 
 router.post('/appointments/:id/feedbacks', feedbacksCtrl.create);
 
 module.exports = router;