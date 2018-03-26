import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import deepOrange from 'material-ui/colors/deepOrange';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  }
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
          this.props.onPageTitleChange(`'${meta.title}'`);
          this.setState({ meta });
        }
        console.log(meta);
      });
  }

  render() {
    const { classes } = this.props;
    const { meta } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>

              <Typography variant='headline'>{meta.title}</Typography>
              <Typography gutterBottom>{meta.description}</Typography>

              <Divider />

              <div className={classes.row}>
                <Avatar className={classes.orangeAvatar}>N</Avatar>
                
                <Typography>Sidebar</Typography>
              </div>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
