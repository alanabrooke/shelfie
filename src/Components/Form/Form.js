import React, { Component } from "react";
import axios from 'axios'
import "./form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
        image: '',
        name: '',
        price: ''
    };
  }

  handleInputs(e){
    let { name, value } =  e.target.value
    this.setState({[name] : value})
    console.log(value)
  }
  
  handleCancel() {
    this.setState({
      image: '',
      name: '',
      price: ''
    })
}

  buttonPress = () => {
    const {image, name, price} = this.state
    axios.post('/api/product', { image, name, price })
    .then(res => {
      this.props.didMount()
    }) 
    this.handleCancel()

}

render() {
    const { image, name, price } = this.state;
        return (
        <div>
            <div>Image URL:</div>
            <input name='image' value={ image } onChange={(e) => this.handleInputs(e)}/>
            <div>Product Name:</div>
            <input name='name' value={ name } onChange={(e) => this.handleInputs(e)}/>
            <div>Price:</div>
            <div>
            <input name='price' value={ price } onChange={(e) => this.handleInputs(e)}/>
                <button className='cancel'> Cancel </button>
                <button className='add'> Add to Inventory </button>
            </div>
            </div>
                );
                }
            }