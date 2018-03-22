import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ({

});

class CreateSkeam extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleChange = (e) => {

  };

  handleSubmit = () => {

  };
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography>
          Lets get started. We need a few details to get started.
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField 
            type='text'
            name='title'
            label='Title'
            onChange={this.handleChange}
            margin='dense'
            required
          />
          <br />
        </form>
      </div>
    );
  }
}

CreateSkeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateSkeam);
