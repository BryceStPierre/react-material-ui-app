import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

class Skeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    };
  }

  render() {
    // const { classes } = this.props;
    const { id } = this.state;

    return (
      <div>
        Skeam ID: {id}
      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
