import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';

const styles = theme => ({
  control: {
    marginBottom: theme.spacing.unit,
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

class SignIn extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: null,
      password: null
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.control}
              name="email"
              label="Email"
              type="text"
              onChange={this.handleChange}
              autoComplete="current-email"
              fullWidth
            />
            <br />
            <TextField
              className={classes.control}
              name="password"
              label="Password"
              type="password"
              onChange={this.handleChange}
              autoComplete="current-password"
              fullWidth
            />
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
