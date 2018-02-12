import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Counter from './views/Counter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from './actions/counter';

import PM from './views/PM'


class App extends Component {
  render() {
    let { counter: value, actions, productActions } = this.props;
    return (
      <div className="container">
        <div className="page-header"> React - Redux - demo app </div>
        {/* <Counter
          value={value}
          onIncrement={() => actions.increment(1)}
          onDecrement={() => actions.decrement(1)}
          onIncrementAsync={() => actions.incrementAsync(1)}
        /> */}
        <hr />

        <PM />

      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
