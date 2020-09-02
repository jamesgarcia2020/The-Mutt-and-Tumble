  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  content: String,
}, {
  timestamps: true
});

const appointmentSchema = new Schema({
  dogName: {
    type: String,
    enum: ['Bruiser', 'Taco', 'Henry`']
  },
  date: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    }
  },
  location: {
      type: String,
  enum: ['Oakland', 'San Leandro', 'Berkeley', 'Alemeda']
  }, 
  training: {
      type: String,
      enum: ['Clicker', 'Negative', 'Positive', 'Alpha']
  },
  feedbacks: [feedbackSchema],
  user: {type: Schema.Types.ObjectId, ref: 'User'}
},
{
  timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);