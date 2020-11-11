import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Modal from 'react-modal';

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
    maxWidth: 300,
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
}));

// Custom modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function EmployeeCard() {
  // Bring in the data from api endpoint /employees
  const [data, setData] = useState([{}]);
  const [modalIsOpen, setIsOpen] = useState(false);

  // let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  //   console.log('cool')
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const classes = useStyles();

  function deleteEmployee(id) {
      axios.delete(`/employees/${id}`).then((res) => {

        const employees = this.state.posts.filter(item => item.id !== id);


        window.location = '/';
        console.log('worked!');
      });
  }

  // const deleteModelBody = (
  //   <div>
  //     {' '}
  //     <h2>Confirm</h2> <p>Are you sure you want to delete?</p>{' '}
  //     {/* {' place data delete onlick handler here!'} */}
  //     <Button color='secondary' onClick={() => deleteEmployee(employee.id)}>Yes</Button>
  //     <Button color='primary' onClick={closeModal}>
  //       Go back
  //     </Button>
  //   </div>
  // );

  // We are mounting the data(employees) from database here
  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await axios.get('/employees');
      setData(result.data);
      console.log(result.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {data.map((employee, index) => (
          <Card className={classes.root} key={index}>
            <CardContent key={employee.index}>
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
                onClick={openModal}
              >
                Delete
              </Button>
              <Modal
                key={index}
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
              >
                <div>
                  {' '}
                  <h2>Confirm</h2> <p>{`Are you sure you want to delete ${employee.firstName}?`}</p>{' '}
                  {/* {' place data delete onlick handler here!'} */}
                  <Button
                    color='secondary'
                    onClick={() => deleteEmployee(employee._id)}
                  >
                    Yes
                  </Button>
                  <Button color='primary' onClick={closeModal}>
                    Go back
                  </Button>
                </div>
              </Modal>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
