

import React from 'react';

const Counter = (props) => {
    let { value, onIncrementAsync, onIncrement, onDecrement } = props;
    return (
        <div className="well">
            <button className="btn btn-default" onClick={onIncrementAsync}>
                <i className="glyphicon glyphicon-plus"></i> - Async
            </button>
            <button className="btn btn-default" onClick={onIncrement}>
                <i className="glyphicon glyphicon-plus"></i>
            </button>
            {' '}
            <button className="btn btn-default" onClick={onDecrement}>
                <i className="glyphicon glyphicon-minus"></i>
            </button>
            &nbsp;=&nbsp;
            <span className="btn btn-default">{value}</span>
        </div>
    )
}

export default Counter;    