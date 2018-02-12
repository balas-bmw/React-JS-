import React, {  } from 'react';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
    <div>
        <button className="btn btn-default" onClick={onIncrementAsync}>
            <i className="glyphicon glyphicon-plus"></i> - Async
        </button>
        {' '}
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

export default Counter;    