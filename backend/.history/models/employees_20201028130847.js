const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
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
    required: true,
  },

  employeeCreatedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module