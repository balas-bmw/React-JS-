
import React, { Component } from 'react';

class ProductForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let values = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            description: this.refs.description.value
        }
        console.log(values);
    }

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-xs-8 col-sm-6 col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading"> Product Form </div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input ref="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" ref="price" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea ref="description" className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-default">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductForm;