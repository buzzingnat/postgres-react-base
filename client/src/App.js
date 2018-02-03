import React, { Component } from 'react';
import particlesJS from 'particles.js'

// import logo from './logo.jpg';
import './App.css';
import { getUsers, newUser } from './apicalls.js';
import particleSettings from './particles.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount () {
    getUsers().then(users => this.setState({users}));
  }

  render() {
    const users = this.state.users;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-color"></div>
          {/*<!-- particles.js container -->*/}
          <div id="particles-js" ref={ node => {
            if (!node) return;
            console.log('ref');
            window.particlesJS("particles-js", particleSettings);
          }}></div>
          <script src="particles.js"></script>
          {/*<!-- particles.js lib (JavaScript CodePen settings): https://github.com/VincentGarreau/particles.js -->*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Postgres+React<br/>Project Base</h1>
        </header>
        <button className="App-button" onClick={() => {
          newUser().then(() => {
            getUsers().then(users => this.setState({users}))
          });
        }}>New User</button>
        <p className="App-intro">
          When everything is initialized correctly, sample users will be output below.
        </p>
        <ul className="App-sample-list">
        {
          users.map(user => {
            return (
              <li key={user.id}>{user.firstName} {user.lastName} | {user.email}</li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
