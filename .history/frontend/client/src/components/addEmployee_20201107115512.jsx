import React, { useState } from 'react';
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

// const submit = e => {
//   e.preventDefault();
//   const data = new FormData();
//   axios({
//     method: 'post',
//     url: '/addEmployee',
//     data: data,
//     headers: {'Content-Type': 'multipart/form-data' }
//     })
//     .then(res=>{
//       console.log(res);
//       console.log(res.data);
//       window.location = "/" //This line of code will redirect you once the submission is succeed
//     })
// }

function EmployeeForm() {
  const classes = useStyles();
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    lastName: '',
    badgeID: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/employees/addEmployee', employeeInfo)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add Employee</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          id='outlined-password-input'
          label='First name'
          type='string'
          variant='outlined'
          name='firstName'
          value={employeeInfo.firstName}
        />
        <TextField
          id='outlined-password-input'
          label='Last name'
          type='string'
          variant='outlined'
          name='lastName'
          value={employeeInfo.lastName}
        />
        <TextField
          id='outlined-password-input'
          label='Employee ID #'
          type='string'
          variant='outlined'
          name='badgeID'
          value={employeeInfo.badgeID}
        />
        <TextField
          id='outlined-password-input'
          label='Phone number'
          type='string'
          variant='outlined'
          name='email'
          value={employeeInfo.phoneNumer}
        />
        <TextField
          id='outlined-password-input'
          label='Email'
          type='string'
          variant='outlined'
        />

        <Button
          type='submit'
          className={classes.btn}
          variant='outlined'
          color='secondary'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default EmployeeForm;
