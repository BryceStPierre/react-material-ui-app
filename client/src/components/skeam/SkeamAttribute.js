import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  fields: {
    display: 'flex',
    flexDirection: 'column'
  }
});

class SkeamAttribute extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      index: this.props.index ? this.props.index : 0,
      heading: this.props.heading ? this.props.heading : '',
      subheading: this.props.subheading ? this.props.subheading : ''
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };
  
  render() {
    const { classes } = this.props;
    const { index, heading, subheading } = this.state;

    return (
      <div className={classes.root}>
        { index && <Typography variant='title'>{index}</Typography> }
        <div className={classes.fields}>
          <TextField
            name='heading'
            label='Heading'
            value={heading}
            onChange={this.handleChange}
            margin='dense'
          />
          <TextField
            name='subheading'
            label='Subheading'
            value={subheading}
            onChange={this.handleChange}
            margin='dense'
            rowsMax='3'
            multiline
          />
        </div>
      </div>
    );
  }
}

SkeamAttribute.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkeamAttribute);