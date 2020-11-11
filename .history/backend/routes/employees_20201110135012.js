const express = require('express');
const router = express.Router();

const Employee = require('../models/employees');

// list all employees

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Query one employee with ID

// Create a employee

router.post('/addEmployee', async (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    badgeID: req.body.badgeID,
    hireDate: req.body.hireDate,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    employeeCreatedDate: req.body.employeeCreatedDate,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).send(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an employee w/ ID

// Delete one employee with ID

// Write a function that is locate the employees

async function getEmployees(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id)
    if (employee == null) {
      return res.status(404).json({ message: 'Cannot find employee.'})
    }
  } catch (err) {
    return res.status(500).json({ message: err.message})
  }
}

module.exports = router;