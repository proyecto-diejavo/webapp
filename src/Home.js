import React, { Component } from 'react';
import fire from './Config/Fire';

class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = { 
            zonas: [] 
        }
        this.db = fire.database().ref().child('zonas');
        
    }

    componentDidMount() {
        const { zonas } = this.state;
        this.db.on('child_added', snap => {
            zonas.push({
                Id:snap.key,
                activa:snap.val().activa,
                descripcion:snap.val().descripcion,
                numero:snap.val().numero
            })
            this.setState({zonas});
        });

        this.db.on('child_removed', snap => {
            for (let i = 0; i < zonas.length; i++) {
              if(zonas[i].Id === snap.key){
                zonas.splice(i,1);
              } 
            }
            this.setState({zonas});
        });

        this.db.on('child_changed', snap => {
            for (let i = 0; i < zonas.length; i++) {
                if (zonas[i].Id === snap.key) {
                    zonas[i].activa=snap.val().activa;
                    zonas[i].descripcion=snap.val().descripcion;
                    zonas[i].numero=snap.val().numero;
                }
            }
            this.setState({zonas});
        })
    };

      
    logout() {
        fire.auth().signOut();
    }

    DeleteZona(id){
        this.db.child(id).remove();
    }

    UpdateZona(id){
        this.db.child(id).update({descripcion: "Test Jr"})
    }

    postZone(){
        let {zonas} = this.state;
        /*zonas.push({
              Id: zonas.length + 1,
              descripcion: this.NameZone.value
        });*/
        this.db.push().set({activa:true, descripcion: this.NameZone.value, numero:zonas.length + 1})
        this.NameZone.value = '';
        this.NameZone.focus();
    }

    render() {
        return (
            <div className='DivContent'>

                <div>
                    <h1>Bienvenido</h1>
                    <button onClick={this.logout}>Cerrar Sesión</button>
                </div>

                <div className="RegisterZona">
                    <div>
                        <label>Agregar zona</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Agregar Zona"
                            ref={input => {this.NameZone = input;}}>
                        </input>
                        <button 
                            className="buttonAdd"
                            onClick={() => this.postZone()}
                        > Agregar Zona</button>
                    </div>
                </div>

                <table className="tblInfo">
                    <thead>
                        <tr>
                            
                            <td><label>Descripción</label></td>
                            <td><label>UpDate</label></td>
                            <td><label>Delete</label></td>
                        </tr>   
                    </thead>
                    <tbody>
                        {
                            this.state.zonas.map(zona =>{
                                 return(                 
                                    <tr key={zona.Id}>                                        
                                        <td>
                                            <label
                                            key={zona.Id}
                                            >{zona.descripcion}
                                            </label>                                        
                                        </td>    
                                        <td>
                                            <label
                                            onClick={() => this.UpdateZona(zona.Id)}
                                            >U
                                            </label>
                                        </td>
                                        <td>
                                            <label
                                            onClick={() => this.DeleteZona(zona.Id)}
                                            >&times;
                                            </label>
                                        </td>                               
                                   </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;