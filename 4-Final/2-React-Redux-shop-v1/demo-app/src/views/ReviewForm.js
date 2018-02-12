import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggleForm() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleSubmit(e) {
        let { onNewReview } = this.props;
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value
        }
        onNewReview(newReview);
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
        if (isOpen) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Review Form</div>
                    <div className="panel-body">
                        <form onSubmit={(e) => { this.handleSubmit(e) }}>
                            <div className="form-group">
                                <label>Stars</label>
                                <select className="form-control" ref="stars">
                                    {[1, 2, 3, 4, 5].map((op, idx) => {
                                        return (<option key={idx}>{op}</option>)
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input className="form-control" ref="author" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea className="form-control" ref="body"></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                            <button type="button" className="btn btn-danger" onClick={() => { this.toggleForm() }}>cancel</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <button onClick={() => { this.toggleForm() }} className="btn btn-default">
                    <i className="glyphicon glyphicon-plus"></i>
                </button>
            );
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-7 col-sm-6 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}


export default ReviewForm;