import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Axios from 'axios';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      myInventory: [{
        id: 0,
        name: 'fasfsdfa',
        price: 51
    },
    {
        id: 1,
        name: 'sdsdgsdga',
        price: 97
    }]
    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
componentDidMount() {
  axios.get('api/inventory') 
  .then(res => {
    console.log('data test', res.data)
    this.setState({myInventory:res.data})
  })
  .catch(error => {
    console.log('oops! error occurred!', error)
  })
}


  render() {
  return (
    <div>
      <Dashboard didMount={this.componentDidMount} myInventory={this.state.myInventory} /> 
      <Form didMount={this.componentDidMount} update={this.updateInventory} />
      <Header/> 
    </div>
  );
}
}
