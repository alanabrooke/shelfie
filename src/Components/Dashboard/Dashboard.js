import React, {Component} from 'react';
import Product from './Components/Product/Product';


export default function Dashboard() {
   
    deleteItem = id => {
        axios
          .delete(`/api/products/${id}`)
          .then(res => {
           this.props.didMount()
          )}

      };

    render() {
        let { myInventory } = this.props
        return( 
            <div> {this.props.myInventory.map(obj => {
                return (
                <div>
             < Product obj={obj} deleteProduct={this.deleteProduct}/>
               </div> ) 
            }
            )
            }
               </div>
        );
    }
}

