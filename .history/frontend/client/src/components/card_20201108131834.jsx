import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import formatDate from './utils/clientHelpers';

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
});

export default function EmployeeCard() {
  // Bring in the data from api endpoint /employees
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await axios.get('/employees');
      setData(result.data);
      console.log(result.data);
    };
    fetchEmployees();
  }, []);

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
