import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  
});

class Skeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      meta: {},
      structure: {},
      notFound: false
    };
  }

  componentDidMount () {
    const { id } = this.state;

    fetch(`/api/skeam/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then((meta) => {
        if (meta) {
          this.props.onPageTitleChange(`${meta.title} [Skeam]`);
          this.setState({ meta });
        }
        console.log(meta);
      });
  }

  render() {
    const { classes } = this.props;
    const { meta } = this.state;

    return (
      <div>
        <Typography variant='heading'>{meta.title}</Typography>

      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
