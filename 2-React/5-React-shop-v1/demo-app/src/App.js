import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import classnames from 'classnames';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
    console.log('App instance created');
  }

  handleTabChange(tab) {
    this.setState({
      tab
    });
  }

  renderTabPanel(product) {
    let { tab } = this.state;
    switch (tab) {
      case 1:
        return (<div className="panel"><p>{product.description}</p></div>)
      case 2:
        return (<div className="panel"><p>Not Yet</p></div>)
      case 3:
        return (<div className="panel"><p>None Yet</p></div>)
      default:
        return null;
    }
  }

  renderBuyBtn(product) {
    if (product.canBuy) {
      return (<button className="btn btn-primary btn-sm">buy</button>)
    } else {
      return null;
    }
  }

  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              <img src={product.image} className="img-responsive" alt="laptop" />
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <span className="badge">{idx + 1}</span>
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              {this.renderBuyBtn(product)}
              <hr />
              <section>
                <ul className="nav nav-tabs">
                  <li class={classnames({ 'active': tab === 1, 'other': true })}><a href="#" onClick={(e) => { this.handleTabChange(1) }}>Description</a></li>
                  <li class={classnames({ 'active': tab === 2 })}><a href="#" onClick={(e) => { this.handleTabChange(2) }}>Specification</a></li>
                  <li class={classnames({ 'active': tab === 3 })}><a href="#" onClick={(e) => { this.handleTabChange(3) }}>Reviews</a></li>
                </ul>
                {this.renderTabPanel(product)}
              </section>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    console.log('App render()');
    return (
      <div className="container">
        <div className="page-header"> shop-v1 </div>
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div >
    );
  }
}

export default App;
