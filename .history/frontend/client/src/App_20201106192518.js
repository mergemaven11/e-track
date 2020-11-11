import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './components/card';
import NavBar from './components/navbar';
import SideBarMenu from './components/sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <>
      <SideBarMenu />
      <NavBar />
      <EmployeeCard />
    </>
  );
}

export default App;

// https://medium.com/@blakedoyle_54663/react-hooks-asynchronous-express-api-requests-8e831523b045