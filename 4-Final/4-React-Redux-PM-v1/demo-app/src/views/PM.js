import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import ProductList from "./pm/ProductList";
const PM = () => (
    <Router>
        <div>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3">
                    <ul className="nav stacked-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all">View-All</Link></li>
                        <li><Link to="/new">Add New</Link></li>
                    </ul>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9">
                    <Route exact path="/" component={Home} />
                    <Route path="/all" component={ProductList} />
                </div>
            </div>
        </div>
    </Router>
);
export default PM;
