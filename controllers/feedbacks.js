const Appointment = require('../models/appointment');
 
 module.exports = {
   create
 };

 function create(req, res) {
    Appointment.findById(req.params.id, function(err, appointment) {
      appointment.feedbacks.push(req.body);
      appointment.save(function(err) {
        res.redirect(`/appointments/${appointment._id}`);
      });
    });
  }