import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import * as productsActions from '../actions/products';
import { Route } from 'react-router-dom';
import ProductView from './ProductView';
import ProductForm from './ProductForm';

class ProductList extends Component {

    componentDidMount() {
        let { productsActions } = this.props;
        productsActions.loadProducts();
    }

    renderProductItems() {
        let { products,productsActions } = this.props;
        return products.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td><Link to={'/all/' + item.id}>{item.name}</Link></td>
                    <td>&#8377;{item.price}</td>
                    <td><Link to={'/all/edit/' + item.id}><i className="glyphicon glyphicon-edit"></i></Link></td>
                    <td><i onClick={()=>{productsActions.deleteProduct(item.id)}} className="glyphicon glyphicon-trash"></i></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="well">
                <div className="panel panel-default">
                    <div className="panel-heading"> Product List </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-condensed">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProductItems()}
                            </tbody>
                        </table>
                        <hr />
                    </div>
                </div>
                <Route exact path={`${this.props.match.url}/:prodId`} component={ProductView} />
                <Route exact path={`${this.props.match.url}/edit/:prodId`} component={ProductForm} />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    return {
        productsActions: bindActionCreators(productsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
