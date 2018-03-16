import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit
  },
  card: {
    minWidth: 275,
    maxWidth: 375,
    margin: 'auto'
  },
  gap: {
    marginBottom: theme.spacing.unit * 3
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fields: {
        email: null,
        displayName: null,
        password: null,
        confirmPassword: null
      },
      emailError: false,
      emailErrorText: '',
      passwordErrorText: '',
      passwordError: false,
      redirect: false
    };
  }

  validatePassword = () => {
    const { password, confirmPassword } = this.state.fields;
    const error = password !== confirmPassword;
    const errorText = error
      ? 'Please ensure the password fields match.'
      : '';
    this.setState({ error, errorText });
  }

  handleChange = (e) => {
    let fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.validatePassword();

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state.fields),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.user)
        this.props.onSignIn(true, res.user);
      this.setState({
        redirect: res.user ? true : false,
        emailError: res.emailError,
        emailErrorText: res.emailError ? 'Sorry, an account with that email address already exists.' : ''
      });
    });
  }
  
  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect)
      return <Redirect to='/explore' />;

    return (
      <Card className={classes.card}>
        <CardContent>
          <form onSubmit={this.handleSubmit}>
            <TextField
              type='text'
              name='email'
              label='Email Address'
              onChange={this.handleChange}
              helperText={this.state.emailErrorText}
              error={this.state.emailError}
              margin='dense'
              fullWidth
              required
              autoFocus
            />
            <br />
            <TextField
              type='text'
              name='displayName'
              label='Display Name'
              onChange={this.handleChange}
              margin='dense'
              fullWidth
              required
            />
            <br />
            <TextField
              type='password'
              name='password'
              label='Password'
              onChange={this.handleChange}
              error={this.state.passwordError}
              margin='dense'
              fullWidth
              required
            />
            <br />
            <TextField
              className={classes.gap}
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              onChange={this.handleChange}
              helperText={this.state.passwordErrorText}
              error={this.state.passwordError}
              margin='dense'
              fullWidth
              required
            />
            <br />
            <Button
              className={classes.button}
              type='submit'
              color='primary'
              variant='raised'
              fullWidth
            >
              Register
            </Button>
            <br />
            <Button
              className={classes.button}
              color='secondary'
              variant='raised'
              fullWidth
            >
              <FaGoogle className={classes.leftIcon} />
              Register with Google
            </Button>
            <br />
            <Button
              color='secondary'
              variant='raised'
              fullWidth
            >
              <FaFacebook className={classes.leftIcon} />
              Register with Facebook
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);