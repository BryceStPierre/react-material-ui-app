import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    maxWidth: 500,
    padding: theme.spacing.unit * 2
  }
});

class CreateSkeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      description: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e
  };
  
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography 
          variant='subheading'
          gutterBottom
        >
          Let's begin with a few details. Don't worry, you can change them later.
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name='title'
            label='Title'
            onChange={this.handleChange}
            margin='dense'
            fullWidth
            required
          />
          <br />
          <TextField
            name='description'
            label='Description'
            onChange={this.handleChange}
            margin='dense'
            rowsMax={3}
            multiline
            fullWidth
            required
          />
          <br />
          <Typography align='center'>
            <Button
              type='submit'
              className={classes.button}
              variant='raised'
              color='primary'
            >
              Create
            </Button>
            <Button
              component={Link}
              to='/explore'
              className={classes.button}
              variant='raised'
              color='error'
            >
              Cancel
            </Button>
          </Typography>
        </form>
      </Paper>
    );
  }
}

CreateSkeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateSkeam);
