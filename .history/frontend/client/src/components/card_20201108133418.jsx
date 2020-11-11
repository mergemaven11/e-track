import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';


// Funtions for the modal

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// Styles

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
    backgroundColor: '#3f51b5',
    color: '#fff',
    maxWidth: 275,
    margin: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#fff',
  },
  pos: {
    marginBottom: 12,
  },
  name: {
    color: '#03fc90',
  },
  btnMargin: {
    marginLeft: 8,
    color: '#03fc90',
  },
  // modal style
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function EmployeeCard() {
  // Bring in the data from api endpoint /employees
  const [data, setData] = useState([{}]);
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen]


  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await axios.get('/employees');
      setData(result.data);
      console.log(result.data);
    };
    fetchEmployees();
  }, []);

  // const deleteModelBody = (<div> <h2>Are you sure you want to delete?</h2> </div>)

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container direction='row' justify='center' alignItems='center'>
      {data.map((employee, i) => (
        <Card className={classes.root} key={i}>
          <CardContent key={i}>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Employee Information{' '}
            </Typography>
            <h2 className={classes.name}>
              {employee.lastName}, {employee.firstName}
            </h2>
            <ul>
              <li> Badge #: {employee.badgeID} </li>
              <li> Hired Date: {employee.hireDate} </li>
              <li> Phone Number: {employee.phoneNumber} </li>
              <li> Email: {employee.email} </li>
            </ul>
            <Button
              size='small'
              variant='outlined'
              color='secondary'
              className={classes.btnMargin}
            >
              Edit
            </Button>
            <Button
              size='small'
              variant='outlined'
              color='secondary'
              className={classes.btnMargin}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
      </Grid>
    </div>
  );
}
