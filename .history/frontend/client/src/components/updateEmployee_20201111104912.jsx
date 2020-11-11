import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
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
    color: '#3f51b5',
  },
  btn: {
    position: 'absolute',
    left: 20,
    bottom: 235,
  },
}));

export default function UpdateEmployeeForm({employee}) {
    const 

    return (
        <div>
            Employee: {employee.name}
        </div>
    )

//   const classes = useStyles();
//   const [updatedInfo, setUpdatedInfo] = useState()

//   const handleChange = (event) => {
//     setUpdatedInfo({
//       ...updatedInfo,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add axios patch request here
//   };

//   return (
//     <div className={classes.container}>
//       <h2 className={classes.title}>{employee.lastName}</h2>
//       <form
//         className={classes.root}
//         noValidate
//         autoComplete='off'
//         onSubmit={handleSubmit}
//       >
//         <TextField
//           id='outlined-password-input'
//           label='First name'
//           type='string'
//           variant='outlined'
//           name='firstName'
//           value={updatedInfo.firstName}
//           onChange={handleChange}
//         />
//         <TextField
//           id='outlined-password-input'
//           label='Last name'
//           type='string'
//           variant='outlined'
//           name='lastName'
//           value={updatedInfo.lastName}
//           onChange={handleChange}
//         />
//         <TextField
//           id='outlined-password-input'
//           label='Employee ID #'
//           type='string'
//           variant='outlined'
//           name='badgeID'
//           value={updatedInfo.badgeID}
//           onChange={handleChange}
//         />
//         <TextField
//           id='outlined-password-input'
//           label='Phone number'
//           type='string'
//           variant='outlined'
//           name='phoneNumber'
//           value={updatedInfo.phoneNumber}
//           onChange={handleChange}
//         />
//         <TextField
//           id='outlined-password-input'
//           label='Email'
//           type='string'
//           variant='outlined'
//           name='email'
//           value={updatedInfo.email}
//           onChange={handleChange}
//         />{' '}
//         <Button
//           type='submit'
//           className={classes.btn}
//           variant='outlined'
//           color='primary'
//         >
//           Add Employee
//         </Button>
//       </form>
//     </div>
//   );
}
