import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Home from './Home';

const Mainapp = () => {
  const user = useSelector(state => state.auth.user);

  if (user) {
    return <Home />;
  }

  return <Login />;
};

export default Mainapp;
