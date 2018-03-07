import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
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
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
