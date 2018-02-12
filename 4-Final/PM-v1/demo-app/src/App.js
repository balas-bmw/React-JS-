import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './views/Counter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from './actions/counter'
import PM from './views/PM';

class App extends Component {
  render() {
    let { counter, counterActions } = this.props;
    return (
      <div className="container">
        <div className="page-header"> React - Redux - PM -app </div>
        {/* <Counter
          value={counter}
          onIncrementAsync={() => { counterActions.incrementAsync(1) }}
          onIncrement={() => counterActions.increment(1)}
          onDecrement={() => counterActions.decrement(1)}
        /> */
        }

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
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
