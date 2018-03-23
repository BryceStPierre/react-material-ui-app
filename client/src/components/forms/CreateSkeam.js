import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import MenuItem from 'material-ui/Menu/MenuItem';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    maxWidth: 400,
    padding: theme.spacing.unit * 2
  },
  gap: {
    marginBottom: theme.spacing.unit * 2
  }
});

class CreateSkeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      description: null,
      category: 'miscellaneous',
      access: true
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSwitch = (e, checked) => {
    this.setState({ [e.target.name]: checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  
  render() {
    const { classes } = this.props;
    const { category, access } = this.state;

    return (
      <div>
        <Typography 
          className={classes.gap} 
          variant='subheading'
        >
          Let's begin with a few details. Don't worry, you can change them later.
        </Typography>
        <Paper className={classes.paper}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name='title'
              label='Title'
              onChange={this.handleChange}
              margin='normal'
              required
            />
            <br />
            <TextField
              name='description'
              label='Description'
              onChange={this.handleChange}
              margin='normal'
              rowsMax={3}
              multiline
              fullWidth
              required
            />
            <br />
            <TextField
              select
              label='Category'
              name='category'
              value={category}
              onChange={this.handleChange}
              margin='normal'
              required
            >
              <MenuItem key={2} value={'miscellaneous'}>
                Miscellaneous
              </MenuItem>
              {/*currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))*/}
            </TextField>
            <br />
            <FormControl component='fieldset' margin='normal'>
              <FormHelperText>Access</FormHelperText>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      name='access'
                      color='secondary'
                      checked={access}
                      onChange={this.handleSwitch}
                      value='public'
                    />
                  }
                  label={access ? 'Public' : 'Private'}
                />
              </FormGroup>
            </FormControl>

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
              >
                Cancel
              </Button>
            </Typography>
          </form>
        </Paper>
      </div>
    );
  }
}

CreateSkeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateSkeam);
