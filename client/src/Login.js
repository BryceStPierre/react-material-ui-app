import React, { Component } from 'react'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
  render() {
    return (
      <Paper elevation={4}>
      <form >
        <TextField
          //id="password"
          label="Username"
          //className={classes.textField}
          type="text"
          autoComplete="current-password"
          //margin="normal"
        />
        <br />
        <TextField
          //id="password"
          label="Password"
          //className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
      </Paper>
    );
  }
}
