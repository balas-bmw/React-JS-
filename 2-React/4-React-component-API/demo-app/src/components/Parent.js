import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types'

class Parent extends Component {

    getChildContext() {
        return { color: "red" };
    }

    render() {
        return (
            <div className="well">
                <Child />
            </div>
        );
    }
}

Parent.childContextTypes = {
    color: PropTypes.string
};

export default Parent;