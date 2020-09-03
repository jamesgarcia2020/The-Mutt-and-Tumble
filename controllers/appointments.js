const Appointment = require('../models/appointment');
const { render } = require('ejs');

module.exports = {
    show,
    index,
    new: newAppointment,
    create,
    edit,
    update

  };

  function edit(req, res) {
    Appointment.findById(req.params.id, function(err, appointment) {
        if (err) {
            res.redirect(`/appointments/${req.params.id}`)
        }
        res.render('appointments/edit', { appointment, title: 'Edit Appointment'})
    })
}

function update(req, res) {
    Appointment.findByIdAndUpdate(req.params.id, req.body, function(err, appointment) {
        if (err) {
            res.render('appointments/edit', { appointment, title: 'Edit Appointment' })
        }
        res.redirect(`/appointments`)
    })
}


  function index(req, res) {
      Appointment.find({}, function(err, appointments) {
      res.render('appointments/index', { appointments })
})
}

function show(req, res) {
    Appointment.findById(req.params.id, function(err, appointment) {
        console.log(appointment)
      res.render('appointments/show', { title: 'Appointment Details', appointment });
    });
  }

  function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
            };
      const appointment = new Appointment(req.body);
      appointment.user = req.user._id;
      appointment.save(function(err) {
          if(err) return res.render('appointments/new');
          
          res.redirect('/appointments');
      })

  }

  
  function newAppointment(req, res) {
      res.render('appointments/new')
  }







