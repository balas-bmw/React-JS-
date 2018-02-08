import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Product from './views/Product';
import ViewCart from './views/ViewCart';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCart: false,
      cart: [],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
          ]
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
          ]
        }
      ]
    }
    console.log('App instance created');
  }

  addToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  }

  addNewReview(prodId, newReview) {
    let { products } = this.state;
    products = products.map(product => {
      if (product.id === prodId) {
        product.reviews.push(newReview);
      }
      return product;
    });
    this.setState({ products });
  }

  renderProducts() {
    let { products, cart, viewCart } = this.state;

    if (!viewCart) {
      return products.map((product, idx) => {
        return (
          <Product 
                  key={idx} 
                  product={product} 
                  idx={idx} 
                  onBuy={(item) => { this.addToCart(item) }} 
                  onNewReview={(prodId,newReview)=>{this.addNewReview(prodId,newReview)}}
                  />
        )
      });
    } else {
      return (
        <ViewCart items={cart} />
      )
    }
  }

  toggleViewCart() {
    this.setState({ viewCart: !this.state.viewCart })
  }

  render() {
    console.log('App render()');
    let { cart, viewCart } = this.state;
    return (
      <div className="container">
        <div className="page-header"> shop-v1 </div>
        <span className="badge">{cart.length}</span> items in cart |
        &nbsp;<a onClick={() => { this.toggleViewCart() }} >{viewCart ? 'view products' : 'view cart'}</a>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div >
    );
  }
}

export default App;
