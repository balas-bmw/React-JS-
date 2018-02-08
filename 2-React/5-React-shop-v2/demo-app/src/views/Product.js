import React, { Component } from 'react';
import classnames from 'classnames';
import Review from './Review'
import ReviewForm from './ReviewForm'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        }
    }

    handleTabChange(tab) {
        this.setState({
            tab
        });
    }

    handleBuyBtnClick() {
        let { onBuy, product } = this.props;
        onBuy(product);
    }

    renderReviews(reviews) {
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }

    handleNewReview(newReview) {
        let { onNewReview, product } = this.props;
        onNewReview(product.id, newReview);
    }

    renderTabPanel(product) {
        let { tab } = this.state;
        let reviews = product.reviews || [];
        switch (tab) {
            case 1:
                return (<div className="panel"><p>{product.description}</p></div>)
            case 2:
                return (<div className="panel"><p>Not Yet</p></div>)
            case 3:
                return (
                    <div className="panel">
                        {this.renderReviews(reviews)}
                        <hr />
                        <ReviewForm onNewReview={(newReview) => { this.handleNewReview(newReview) }} />
                    </div>
                )
            default:
                return null;
        }
    }

    renderBuyBtn(product) {
        if (product.canBuy) {
            return (<button onClick={() => { this.handleBuyBtnClick() }} className="btn btn-primary btn-sm">buy</button>)
        } else {
            return null;
        }
    }
    render() {
        let { product, idx } = this.props;
        let { tab } = this.state;
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
                                <li className={classnames({ 'active': tab === 1, 'other': true })}><a onClick={(e) => { this.handleTabChange(1) }}>Description</a></li>
                                <li className={classnames({ 'active': tab === 2 })}><a onClick={(e) => { this.handleTabChange(2) }}>Specification</a></li>
                                <li className={classnames({ 'active': tab === 3 })}><a onClick={(e) => { this.handleTabChange(3) }}>Reviews</a></li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;