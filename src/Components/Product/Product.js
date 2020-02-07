import React, { Component } from 'react'
import './product.css'

export default class Product extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return(
            <section>
                <div>{this.props.obj.name}</div>
                <div>{this.props.obj.price}</div>
                <button onClick={() => {this.props.deleteProduct(this.props.obj.productId)}}>DELETE</button>
            </section>
        )
    }
}