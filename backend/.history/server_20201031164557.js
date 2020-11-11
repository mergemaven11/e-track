const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 6000;

app.use(cors());
app.use(bodyParser.json())

// dotenv
require('dotenv').config();

// Connect DB

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database successfully!'));

// Middleware for the server to accept request in the form of JSON
app.use(express.json());

// bring in the "employee" routes here
const employeeRouter = require('./routes/employees');
app.use('/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
