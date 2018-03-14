import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  control: {
    marginBottom: theme.spacing.unit,
  },
  gap: {
    marginBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275,
    maxWidth: 325,
    margin: 'auto'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      credentials: {
        email: null,
        password: null
      },
      value: 0,
      error: false,
      authenticated: false
    };
  }
  
  componentWillMount () {
    fetch('/api/signin', { credentials: 'include' })
    .then(res => res.json())
    .then((user) => {
      if (user) {
        this.setState({ 
          authenticated: true
        });
      }
    });
  }

  handleChange = (e) => {
    let credentials = Object.assign({}, this.state.credentials);
    credentials[e.target.name] = e.target.value;
    this.setState({ credentials });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(this.state.credentials),
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    })
    .then((res) => {
      if (res.status === 401) 
        return null;
      return res.json();
    }).then((user) => {
      if (user)
        this.props.onSignIn(true, user);
      this.setState({ 
        authenticated: user ? true : false,
        error: user ? false : true
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { authenticated, error, value } = this.state;

    if (authenticated)
      return <Redirect to='/profile' />;

    return (
      <Card className={classes.card}>
        <AppBar position="static" color="primary">
          <Tabs value={value} fullWidth>
            <Tab label="Sign In" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        <CardContent>
          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.control}
              name="email"
              label="Email Address"
              type="text"
              error={error}
              onChange={this.handleChange}
              autoComplete="current-email"
              fullWidth
            />
            <br />
            <TextField
              className={classes.gap}
              name="password"
              label="Password"
              type="password"
              error={error}
              onChange={this.handleChange}
              autoComplete="current-password"
              fullWidth
            />
            { error && <Typography align="center" color="error">Invalid email address or password.</Typography> }
            <br />
            <Button
              className={classes.control}
              type="submit"
              variant="raised" 
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
            <br />
            <Button
              className={classes.control}
              variant="raised" 
              color="secondary"
              fullWidth
            >
              <FaGoogle className={classes.leftIcon} />
              Continue with Google
            </Button>
            <br />
            <Button 
              className={classes.control}
              variant="raised" 
              color="secondary"
              fullWidth
            >
              <FaFacebook className={classes.leftIcon} />
              Continue with Facebook
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
