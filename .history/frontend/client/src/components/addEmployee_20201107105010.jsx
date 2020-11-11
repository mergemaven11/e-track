import React from 'react';
import {
  TextField,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    marginTop: 120,
    marginLeft: 320,
    marginRight: 120,
    position: 'relative',
    height: 700,
    padding: 10,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  title: {
    color: '#ff304f',
  },
  btn: {
    position: 'absolute',
    right: 0,
    bottom: 235,
  },
}));


const handleSubmit = event => {
  event.preventDefault();
  const Employee = {
    firstName: firstName,
    lastName: lastName,
    badgeID: 
  }
  axios.post('/addEmployee', { Employee })
    .then(res=>{
      console.log(res);
      console.log(res.data);
      window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    })
}

function EmployeeForm() {
  const classes = useStyles();  
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add Employee</h2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='outlined-password-input'
          label='First name'
          type='string'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Last name'
          type='string'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Employee ID #'
          type='string'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Phone number'
          type='string'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Email'
          type='string'
          variant='outlined'
        />

        <Button className={classes.btn} variant='outlined' color='secondary'>
          Submit
        </Button>
      </form>
    </div>
  );
}


export default EmployeeForm;
