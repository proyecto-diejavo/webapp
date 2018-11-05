import React, { Component } from 'react';
import {signIn, createUser} from 'services/authentication.services';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }
  state = { email: '', password: '' };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    const {email, password} = this.state;
    signIn(email, password);
  }

  signup(e){
    e.preventDefault();
    const {email, password} = this.state;
    createUser(email, password);
  }
  render() {
    return (
      <div>
        <form>
          <h1>
            Login
          </h1>

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