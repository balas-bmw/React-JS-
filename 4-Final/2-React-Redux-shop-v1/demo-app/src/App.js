import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Product from './views/Product';
import ViewCart from './views/ViewCart';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProducts, loadProductsRequest } from './actions'

import { createSelector } from 'reselect';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCart: false,
      cart: [],
    }
  }
  componentDidMount() {
    let { actions } = this.props;
    // actions.loadProducts();  // Thunk
    actions.loadProductsRequest();

  }
  addToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  }

  renderProducts() {
    let { cart, viewCart } = this.state;
    let { products } = this.props;

    if (!viewCart) {
      if (products.length === 0) {
        return <span className="badge"> Products Are Loading </span>
      }
      return products.map((product, idx) => {
        return (
          <Product
            key={idx}
            product={product}
            idx={idx}
            onBuy={(item) => { this.addToCart(item) }}
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

// const getActiveDataNoraml = (inp1, inp2) => {
//   // returns by filtering out all someData for which isActive set to true
//   return "result.......";
// }

// getActiveData = createSelector([someData, isActive], (data, active) => {
//   // callback is called only when someData or isActive changes
//   getActiveDataNoraml(data, isActive);
// })

function mapStateToProps(state, props) {
  return {
    products: state.products,
    //someActiveData: getActiveData(state.products, state.reviews)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadProducts,
        loadProductsRequest
      },
      dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
