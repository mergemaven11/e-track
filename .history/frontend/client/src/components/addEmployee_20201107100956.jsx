import React from 'react';
import { TextField, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
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
      width: 200,
    },
  },
  title: {
    color: '#ff304f', 
  }, 
});

function EmployeeForm() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add Employee!</h2>
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField defaultValue="Hello World" />
        <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
      </div>
      <div>
      <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
         <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
      </div>
      <div>
      <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
        <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
      </div>
    </form>
    </div>
  );
}

// ⚠️Only one input can be used within a FormControl.

export default EmployeeForm;
