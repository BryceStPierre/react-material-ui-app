import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, withRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import 'typeface-roboto';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9a67ea',
      main: '#673ab7',
      dark: '#320b86',
      contrastText: '#fff'
    }, secondary: {
      light: '#67daff',
      main: '#03a9f4',
      dark: '#007ac1',
      contrastText: '#000'
    }
  }
});

const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <AppWithRouter />
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
