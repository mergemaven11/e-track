import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './components/card';
import NavBar from './components/navbar';
import SideBarMenu from './components/sidebar';
import EmployeeForm from './components/addEmployee';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <SideBarMenu />
        <NavBar />
        <Switch>
          <Route exact path='/' component={EmployeeCard} />
          <Route exact path='/addEmployee' component={EmployeeForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// https://medium.com/@blakedoyle_54663/react-hooks-asynchronous-express-api-requests-8e831523b045
