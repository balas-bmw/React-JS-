import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/products';
import { Route, Link } from "react-router-dom";
import ProductView from './ProductView'

class ProductList extends Component {
    componentDidMount() {
        let { productActions } = this.props;
        productActions.loadProducts();
    }
    renderProductItems() {
        let { products,productActions } = this.props;
        return products.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td><Link to={'/all/' + item.id}>{item.name}</Link></td>
                    <td>&#8377;{item.price}</td>
                    <td><i className="glyphicon glyphicon-edit"></i></td>
                    <td><i onClick={()=>{productActions.deleteProduct(item.id)}} className="glyphicon glyphicon-trash"></i></td>
                </tr>
            );
        });
    }
    render() {
        let { match } = this.props;
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"> All Products </div>
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
                <Route path={`${match.url}/:prodId`} component={ProductView} />
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
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
