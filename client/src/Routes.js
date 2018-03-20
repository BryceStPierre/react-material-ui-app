import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Explore from './Explore';
import NotFound from './NotFound';
import SignIn from './components/forms/SignIn';
import Register from './components/forms/Register';

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