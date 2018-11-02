import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Tabs, Tab } from 'components';


const zonesRef = firebase.database().ref().child('asignacion').child('12102018').child('zonas').child('1000000000');

class WaiterTables extends Component {
  state = { zones: null }

  componentDidMount() {
    zonesRef.on('value', snapshot => {
      this.setState({
        zones: snapshot.val()
      })
    });
  }
  
  render() {
    const { zones } = this.state;
    if(!zones) return false;
    return (
      <Tabs>
        <Tab tabName={'Zonas'}>
          {zones.map(zone => <div><p>hi</p></div>)}
        </Tab>
        <Tab tabName={'Mesas'}>
          <p>tables</p>
        </Tab>
      </Tabs>
    );
  }
}
export default WaiterTables;