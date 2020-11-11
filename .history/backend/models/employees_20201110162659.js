const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: { type: String },
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  badgeID: {
    type: String,
    required: true,
  },

  hireDate: {
    type: Date,
  },

  employeeCreatedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  phoneNumber: {
    type: String,
    default: 'N/A',
  },
  email: {
    type: String,
    default: 'N/A',
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
