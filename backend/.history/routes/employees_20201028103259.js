const express = require('express')
const router = express.Router()


// list all employees 

router.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Query one employee with ID 

// Create a employee 

// Update an employee w/ ID

// Delete one employee with ID 


module.exports = router;
