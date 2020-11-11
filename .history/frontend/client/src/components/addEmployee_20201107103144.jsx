import React from 'react';
import {
  TextField,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
}));

function EmployeeForm() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add Employee</h2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='outlined-password-input'
          label='First Name'
          type='string'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Last Name'
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
          label='Date Hired'
          type='password'
          variant='outlined'
        />

        <Button variant='outlined' color='primary'>
          Primary
        </Button>
      </form>
    </div>
  );
}

// ⚠️Only one input can be used within a FormControl.

export default EmployeeForm;
