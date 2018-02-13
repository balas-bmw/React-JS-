import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError, reset } from 'redux-form'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import { createSelector } from 'reselect'

async function saveProduct(data) {
    let apiUrl = 'http://localhost:8080/api/products';
    try {
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let product = await response.json();
        return product;
    } catch (error) {
        console.error(error);
    }
}

const submit = (values, productsActions) => {
    let { name = '', price = '', description = '' } = values;
    let error = {};
    let isError = false;
    if (name.trim() === '') {
        error.name = "Required";
        isError = true;
    }
    if (price.trim() === '') {
        error.price = "Required";
        isError = true;
    }
    if (price > 1000) {
        error.price = "Price must be less than 1000";
        isError = true;
    }
    if (description.trim() === '') {
        error.description = "Required";
        isError = true;
    }
    if (isError) {
        throw new SubmissionError(error);
    } else {
        console.dir(values);
        // return saveProduct(values)
        //     .then(data => {
        //         if (data.error) {
        //             throw new SubmissionError({ price: data.error.message });
        //         }
        //     });
        productsActions.saveProduct(values);

    }

}

// outside your render() method
const renderField = ({ type, input, label, meta: { touched, error } }) => (
    <div className="form-group">
        <label>{label}</label>
        <input type={type} {...input} className="form-control" />
        {touched && error &&
            <span className="error">{error}</span>}
    </div>
)
const renderTextAreaField = ({ type, input, label, meta: { touched, error } }) => (
    <div className="form-group">
        <label>{label}</label>
        <textarea type={type} {...input} className="form-control" />
        {touched && error &&
            <span className="error">{error}</span>}
    </div>
)

const ProductForm = ({ handleSubmit, productsActions }) => {
    return (
        <div >
            <div className="row">
                <div className="col-xs-7 col-sm-6 col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading"> Product Form </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit((fields) => submit(fields, productsActions))}>
                                <Field name="name" label="Name" component={renderField} type="text" />
                                <Field name="price" label="Price" component={renderField} type="text" />
                                <Field name="description" label="Description" component={renderTextAreaField} type="textarea" />
                                <button onClick={() => { }} className="btn btn-default" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const ReduxProductForm = reduxForm({
    form: 'product'
})(ProductForm);

function findProduct(state, props) {
    console.log('finding product..');
    return state.products.find(item => item.id === props.match.params.prodId);
}


// reselect
const findProducts = (state) => state.products;
const findProductId = (state, props) => props.match.params.prodId;

const findProductNew = createSelector([findProducts, findProductId], (products, prodId) => {
    console.log('finding product..');
    return products.find(item => item.id === prodId); // heavy calc ,
});


function mapStateToProps(state, props) {
    return {
        initialValues: findProduct(state, props)
        //initialValues: findProductNew(state, props)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productsActions: bindActionCreators(productsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxProductForm);