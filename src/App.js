import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyA30bWo9jOhSQ3zxQ8-W5g1I1DfzTNQ_pU",
  authDomain: "proyecto-diejavo.firebaseapp.com",
  databaseURL: "https://proyecto-diejavo.firebaseio.com",
  projectId: "proyecto-diejavo",
  storageBucket: "proyecto-diejavo.appspot.com",
  messagingSenderId: "297449767079"
};

firebase.initializeApp(config)
const nameRef = firebase.database().ref().child('object').child('name');

class App extends Component {
  state = { name: 'Pepe' }

  componentDidMount() {
    nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{this.state.name}</h1>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
