import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Card, { CardContent } from 'material-ui/Card';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';
import Divider from 'material-ui/Divider';

import axios from 'axios';

const styles = theme => ({
  container: {
    //display: 'flex',
    //flexWrap: 'wrap',
  },
  button: {
    marginBottom: theme.spacing.unit,
    //width: 'auto'
  },
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email: null,
      password: null
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.button}
              name="email"
              label="Email"
              type="text"
              onChange={this.handleChange}
              autoComplete="current-email"
              fullWidth
            />
            <br />
            <TextField
              className={classes.button}
              name="password"
              label="Password"
              type="password"
              onChange={this.handleChange}
              autoComplete="current-password"
              fullWidth
            />
            <br />
            <Button
              className={classes.button}
              variant="raised" 
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
            <br />
            <Button
              className={classes.button}
              variant="raised" 
              color="secondary"
              fullWidth
            >
              <FaGoogle className={classes.leftIcon} />
              Sign In with Google
            </Button>
            <br />
            <Button 
              className={classes.button}
              variant="raised" 
              color="secondary"
              fullWidth
            >
              <FaFacebook className={classes.leftIcon} />
              Sign In with Facebook
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
