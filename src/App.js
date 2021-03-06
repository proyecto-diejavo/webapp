import React, { Component } from 'react';
import './App.css';
import fire from 'config/Fire'
import { Login, AdminHome } from 'views';

/*const nameRef = fire.database().ref().child('object').child('name');*/

class App extends Component {
  state = { name: 'Pepe' }

  constructor(props){
    super(props)
    this.state = {
      user:{},
    }
  }

  componentDidMount() {
    this.authListener();
    /*nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      })
    });*/
  };

  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      console.log(user);
      if (user){
        this.setState({user});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({user:null});
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    return (
      <div className="App">
       {this.state.user ? (<AdminHome />) : (<Login/>)}
      </div>
    );
  }
}

export default App;
