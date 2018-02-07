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

  incrementTotalCount() {
    this.setState({ totalCount: this.state.totalCount + 1 });
  }

  render() {
    console.log('App render()');
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="page-header"> React basics </div>
        <HitButton label="+1" onHit={() => { this.incrementTotalCount() }} />
        <HitButton label="+10" onHit={() => { this.incrementTotalCount() }} />
        <HitButton label="-10" onHit={() => { this.incrementTotalCount() }} />
        <HitButton label="-1" onHit={() => { this.incrementTotalCount() }} />
        <hr />
        <TotalCountDisplay total={totalCount} />
      </div>
    );
  }
}

export default App;
