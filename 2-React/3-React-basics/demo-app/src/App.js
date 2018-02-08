import React, { Component } from 'react';
import HitButton from './components/HitButton';
import TotalCountDisplay from './components/TotalCountDisplay';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0
    }
    console.log('App instance created');
  }

  incrementTotalCount(n) {
    this.setState({ totalCount: this.state.totalCount + n });
  }

  render() {
    console.log('App render()');
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="page-header"> React basics </div>
        <div className="panel panel-default">
          <div className="panel-heading">App Component  : {totalCount}</div>
          <div className="panel-body">
            <div style={{ display: 'inline' }}>
              <HitButton label="1" onHit={(n) => { this.incrementTotalCount(n) }} />
              <HitButton label="10" onHit={(n) => { this.incrementTotalCount(n) }} />
              <HitButton label="-10" onHit={(n) => { this.incrementTotalCount(n) }} />
            </div>
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay total={totalCount} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
