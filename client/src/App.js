import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    };
  }
  
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Data</h2>
        <ul>
          { this.state.users.map(user =>
            <li key={user.id}>{user.test}</li>
          )}
        </ul>
      </div>
    );
  }
}
