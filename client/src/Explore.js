import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
});

class Explore extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      search: ''
    };
  }
  
  onChange = (e) => {
    this.setState({ search: e.target.value });
  }

  onClear = (e) => {
    this.textField.focus();
    this.setState({ search: '' });
  }

  render() {
    const { classes } = this.props;
    const { search } = this.state;

    return (
      <div className={classes.root}>
        <TextField
          type='text'
          name='search'
          label='Search'
          value={search}
          onChange={this.onChange}
          inputRef={input => { this.textField = input; }}
          margin='normal'
          fullWidth
          autoFocus
        />
        <Button
          color='default'
          variant='raised'
          onClick={this.onClear}
        >
          Clear
        </Button>
      </div>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Explore);