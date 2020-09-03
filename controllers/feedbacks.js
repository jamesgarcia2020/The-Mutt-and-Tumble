const Appointment = require('../models/appointment');
 
 module.exports = {
   create,
   delete: deleteFeedback
 };

 function create(req, res) {
    Appointment.findById(req.params.id, function(err, appointment) {
      req.body.user = req.user._id;
      appointment.feedbacks.push(req.body);
      appointment.save(function(err) {
        res.redirect(`/appointments/${appointment._id}`);
      });
    });
  }

  function deleteFeedback(req, res) {
    Appointment.findOne({'feedbacks._id' : req.params.id}, function(err, appointment) {
      const feedSubdoc = appointment.feedbacks.id(req.params.id);
      feedSubdoc.remove();
      appointment.save(function(err) {
        res.redirect(`/appointments/${appointment._id}`);
      })
    })
  }