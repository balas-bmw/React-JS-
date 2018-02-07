import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
        console.log('TotalCountDisplay instance created');
    }
    render() {
        console.log('TotalCountDisplay render()');
        let { total } = this.props;
        return (
            <div className="alert alert-danger">
                Total count : <span className="badge">{total}</span>
            </div>
        );
    }
}

TotalCountDisplay.propTypes = {
    total: PropTypes.number
}

export default TotalCountDisplay;