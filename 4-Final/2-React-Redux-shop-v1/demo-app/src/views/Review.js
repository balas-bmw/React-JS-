import React, { Component } from 'react';

class Review extends Component {
    render() {
        let { review } = this.props;
        return (
            <div className="row">
                <div className="col-xs-7 col-sm-6 col-md-6">
                    <div className="alert alert-danger">
                        <span className="badge">{review.stars}</span> &mdash; {review.author}
                        <hr />
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;