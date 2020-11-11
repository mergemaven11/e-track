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

router.patch('/:id', getEmployees, async (req, res) => {
  // make sure the req is not empty 
  if (req.body.firstName != null) {
    res.employee.firstName = req.body.firstName
  }
  if (req.body.lastName != null) {
    res.employee.lastName = req.body.lastName
  }
  if (req.body.badgeID != null) {
    res.employee.badgeID = req.body.badgeID
  }
  if (req.body.phoneNumber != null) {
    res.employee.phoneNumber = req.body.phoneNumber
  }
  if (req.body.email != null) {
    res.employee.email = req.body.email
  }
  try {
    const updatedEmployee = await res.employee.save()
    res
  }
})

// Delete one employee with ID

router.delete('/:id', getEmployees,  async (req, res) => {
  try {
    await res.employee.remove();
    res.json({ message: 'Employee Deleted!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get employees by ID
router.get('/:id', getEmployees, (req, res) => {
  // When Id is passed here it will return the name of the subscriber:
  // res.send(res.subscriber.name)
  res.json(res.employee);
});

// Write a middleware function that will get the employees

async function getEmployees(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Cannot find employee.' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.employee = employee;
  next();
}

module.exports = router;
