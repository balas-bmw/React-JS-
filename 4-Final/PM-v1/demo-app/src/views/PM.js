import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './Home';
import ProductList from './ProductList';


class PM extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-3 col-md-3">
                            <ul className="nav stacked-nav">
                                <li><Link to="/">Home </Link></li>
                                <li><Link to="/all">View All</Link></li>
                                <li><Link to="/new">Add New</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-8 col-sm-9 col-md-9">
                            <Route exact={true} path={"/"} component={Home} />
                            <Route path={"/all"} component={ProductList} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default PM;