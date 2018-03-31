import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

import Grow from 'material-ui/transitions/Grow';

import sample from '../../images/sample.png';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '100%',
    textAlign: 'left'
  },
  button: {
    margin: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Explore extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      search: '',
      loading: false,
      columns: 3,
      results: []
    };

    this.timeout = null;
  }
  
  onChange = (e) => {
    this.setState({ 
      search: e.target.value,
      loading: e.target.value !== ''
    });

    if (this.state.search === '') return;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {

      console.log('Starting search...');
      fetch(`/api/skeam/search/${this.state.search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          results: res ? res : []
        });
      });

    }, 250);
  }

  onClear = (e) => {
    this.textField.focus();
    this.setState({ search: '' });
  }

  componentWillMount () {
    this.updateWindowDimensions();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    if (window.innerWidth >= 900)
      this.setState({ columns: 3 });
    else if (window.innerWidth >= 680)
      this.setState({ columns: 2 });
    else if (window.innerWidth >= 380)
      this.setState({ columns: 1 });
  };

  render() {
    const { classes } = this.props;
    const { results, search, loading, columns } = this.state;

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
          className={classes.button}
          color='default'
          variant='raised'
        >
          Advanced
        </Button>
        <Button
          className={classes.button}
          color='default'
          variant='raised'
          onClick={this.onClear}
        >
          Clear
        </Button>
        {!loading && (
          <div className={classes.container}>
            <GridList 
              className={classes.gridList} 
              cellHeight={180}
              cols={columns}
            >
              <GridListTile key='Subheader' cols={columns} style={{ height: 'auto' }}>
                <Typography variant="title">
                  Results
                </Typography>
              </GridListTile>
              {
                results.map((r, i) => (
                <Grow key={r.id} timeout={{ enter: i * 500, exit: i * 500 + 500 }}  in>
                  <GridListTile>
                    <img src={sample} alt={r.title} />
                    <GridListTileBar
                      title={r.title}
                      subtitle={<span>by: Author</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                </Grow>))
              }
            </GridList>
            {results.length === 0 && (
              <Typography 
                variant='subheading' 
                margin='normal'
                align='center'
              >
                No results to show.
              </Typography>
            )}
          </div>
        )}
        {loading && (
          <div>
            <br />
            <CircularProgress 
              className={classes.progress}
              color='primary'
              size={75} />
          </div>
        )}
      </div>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Explore);