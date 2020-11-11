import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Add from '@material-ui/icons/Add';
import ViewList from '@material-ui/icons/ViewList';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import EmployeeForm from './addEmployee';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const clickHandler = () => {
  const page = <EmployeeForm />;
  return page;
};

export default function SideBarMenu() {
  const classes = useStyles();
  const user = 'Tobias';
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Typography>Welcome, {user}</Typography>
          <Divider />
          <Router>
            <List>
              {['Add Employee', 'View All'].map((text, index) => (
                <ListItem button key={text} onClick={clickHandler}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <Link to='/addEmployee'>
                        <Add />
                      </Link>
                    ) : (
                      <Link to='/'>
                        <ViewList />
                      </Link>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Router>
        </div>
      </Drawer>
    </div>
  );
}
