import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Product from './Components/Product/Product';


class App extends Component {
  render() {
  return (
    <div>
      <Dashboard /> 
      <Form/>
      <Header/> 
    </div>
  );
}
}

export default App;
