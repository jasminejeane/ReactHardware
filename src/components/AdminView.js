import React, {Component} from 'react';
import ProductForm from './ProductForm';

class AdminView extends Component {
  render() {
    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
          // show our list of products here
          <h2>Create a New Product</h2>
          // create product form goes here
          <ProductForm/>

        </div>
    );
  }
}

export default AdminView;
