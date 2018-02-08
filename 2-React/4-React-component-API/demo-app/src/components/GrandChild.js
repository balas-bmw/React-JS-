import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrandChild extends Component {
    render() {
        return (
            <div className="well">
                {this.context.color}
            </div>
        );
    }
}

GrandChild.contextTypes = {
    color: PropTypes.string
};

export default GrandChild;