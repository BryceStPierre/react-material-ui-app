import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: 400,
    margin: 'auto'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fields: {
        email: null,
        displayName: null,
        password: null,
        confirmPassword: null
      },
      error: false,
      redirect: false
    };
  }

  handleChange = (e) => {
    let fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/register", {

    })
    .then((res) => {

    })
    .then((user) => {

    });
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
