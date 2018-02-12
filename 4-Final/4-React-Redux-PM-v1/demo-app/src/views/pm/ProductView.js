import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

class ProductView extends Component {
    renderProduct() {
        let { product } = this.props;
        if (product) {
            return (
                <div>
                    <div className="col-sm-3 col-md-3">
                        <img src={'/'+product.image} className="img-responsive" />
                    </div>
                    <div className="col-sm-9 col-md-9">
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        <p>{product.description}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"> ProductView </div>
                    <div className="panel-body">
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        );
    }
}

// selector
function findProduct(state, props) {
    console.log('finding product..');
    return state.products.find(item => item.id === props.match.params.prodId);
}


// reselect
const findProducts = (state) => state.products;
const findProductId = (state, props) => props.match.params.prodId;
const findProductNew = createSelector([findProducts, findProductId], (products, prodId) => {

    return products.find(item => item.id === prodId);
});


function mapStateToProps(state, props) {
    return {
        product: findProduct(state, props)
    }
}
export default connect(mapStateToProps, null)(ProductView);