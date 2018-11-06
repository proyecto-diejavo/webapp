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
      // <div className="App">
      // <div className='HeaderApp'>
      //   <div className='TitleHeader'>cuenta</div>
      // </div> 
      //   <header className="App-header">
      //   <div className='Cuenta'>
      //       <div className='DetalleCuenta'>
      //         <div className='CuentaProducto'>              
      //           <div className='ProductoNeto'>Cerveza Corona</div>
      //           <div className='ProductoValorNeto'>$12.000 X 3</div>
      //         </div>
      //         <div className='CuentaValor'>$36.000</div>
      //       </div>

      //       <div className='DetalleCuenta'>
      //         <div className='CuentaProducto'>
      //           <div className='ProductoNeto'>Ron Caldas</div>
      //           <div className='ProductoValorNeto'>$125.000 X 2</div>
      //         </div>
      //         <div className='CuentaValor'>$250.000</div>
      //       </div>

      //       <div className='DetalleCuenta'>
      //         <div className='CuentaProducto'>
      //           <div className='ProductoNeto'>Aguardiente Antioqueño</div>
      //           <div className='ProductoValorNeto'>$120.000 X 1</div>
      //         </div>
              
      //         <div className='CuentaValor'>$120.000</div>
      //       </div>

      //       <div className='DetalleCuenta'>
      //         <div className='CuentaProducto'>
      //           <div className='ProductoNeto'>Tequila Don Juan</div>
      //           <div className='ProductoValorNeto'>$350.000 X 2</div>
      //         </div>
      //         <div className='CuentaValor'>$700.000</div>
      //       </div>

      //       <div className='DetailPago'>
      //         <div className='TotalVl'>
      //           <div className='TotalVl1'>Servicio</div>
      //           <div className='TotalVl2 DetRecuadro'>$9.000</div>
      //         </div>
      //         <div className='TotalVl'>
      //           <div className='TotalVl1'>SubTotal</div>
      //           <div className='TotalVl2'>$90.000</div>
      //         </div>
      //         <div className='TotalVl'>
      //           <div className='TotalVl1'>Iva</div>
      //           <div className='TotalVl2'>$900.000</div>
      //         </div>
      //         <div className='TotalVl'>
      //           <div className='TotalVl1'>Total</div>
      //           <div className='TotalVl2'>$9.000.000</div>
      //         </div>
      //       </div>
      //     </div>

      //       <Button
      //         color={'white'}
      //         buttonLabel={'hi'}
      //         disabled={false}
      //         name="Cerrar"
      //       />
            
      //       <br></br>
      //   </header>
      //   <div className='FootherApp'></div>
      <div className="App-header">
       {this.state.user ? (<AdminHome />) : (<Login/>)}
      </div>
    );
  }
}

export default App;
