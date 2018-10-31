import React, { Component } from 'react';
import fire from './Config/Fire';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <form>
          <h1>
            Login
          </h1>

          <div className="ImageLogin">

          </div>

          <div>
            <label>Correo</label>
            <br></br>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Correo" />
          </div>
          <div>
            <label>Contraseña</label>
            <br></br>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Contraseña" />
          </div>
            <button type="submit" onClick={this.login}>Iniciar Sesión</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}}>Registrar</button>
        </form> 
      </div>
    );
  }
}
export default Login;