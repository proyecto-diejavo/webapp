import React, { Component } from 'react';
import fire from './Config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Bienvenido</h1>
               <button onClick={this.logout}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Home;