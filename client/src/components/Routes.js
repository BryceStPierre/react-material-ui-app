import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Explore from './pages/Explore';
import NotFound from './pages/NotFound';
import SignIn from './forms/SignIn';
import Register from './forms/Register';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/explore" component={Explore}/>
    <Route 
      path="/sign-in" 
      render={(routeProps) => (
        <SignIn {...routeProps} onSignIn={props.onSignIn} />
      )}
    />
    <Route 
      path="/register"
      render={(routeProps) => (
        <Register {...routeProps} onSignIn={props.onSignIn} />
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;