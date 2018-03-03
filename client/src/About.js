import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <div>
          <h3>Navigation</h3>
          <ul role="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
