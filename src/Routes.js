import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewNote from './pages/NewNote';
import Signup from './pages/Signup';
export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={Login} path='/login' />
      <Route component={Signup} path='/signup' />
      <Route component={NewNote} path='/notes/new' />
    </Switch>
  );
}
