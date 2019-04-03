import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
//import {StyleSheet,View} from 'react-native';
var config = {
  apiKey: "AIzaSyALI99GmjUB8D54YFKChBvrShrnb7yYT7I",
  authDomain: "react-chapter8.firebaseapp.com",
  databaseURL: "https://react-chapter8.firebaseio.com",
  projectId: "react-chapter8",
  storageBucket: "react-chapter8.appspot.com",
  messagingSenderId: "228016244388"
};
firebase.initializeApp(config);

var db=firebase.database();

class App extends Component {
  state = {pets:[
    {name : 'Chin', type:'Chin'}
  ]}
  componentDidMount(){
    db.ref('/แมว-สายพันธุ์').on('value',snapshot => {
      let val =snapshot.val();
      this.setState({pets:val})
    });
  }
  render() {
    return (
      
      <div>
        {this.state.pets.map(it => <div>{it.ชื่อสายพันธุ์}</div>)} 
      </div> 
      
    );
  }
}
/*const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  },
  ctext:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
});*/

export default App;
