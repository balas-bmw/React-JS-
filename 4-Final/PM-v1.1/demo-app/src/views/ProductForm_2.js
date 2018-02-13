
import React, { Component } from 'react';

class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            description: '',
            superName: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newProduct = this.state;
        console.log(newProduct);
        this.setState({
            name: '',
            superName:'',
            price: 0,
            description: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            superName: (e.target.name === 'name' ? 'Mr.' + e.target.value : '')
        });
    }

    render() {
        let { superName,name, price, description } = this.state
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
                                        <input type="hidden" name="hiddenName" value={superName} />
                                        <input value={name} className="form-control" name="name" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={price} type="number" name="price" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea value={description} name="description" className="form-control" onChange={this.handleChange}></textarea>
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