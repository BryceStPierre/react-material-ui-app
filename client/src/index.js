import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import 'typeface-roboto';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const options = {
  palette: {
    primary: {

    }, secondary: {

    }, error: {

    }
  }, status: {

  }
};

const theme = createMuiTheme();

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
), document.getElementById('root'));

registerServiceWorker();
