import React, { Component } from 'react';
import Message from './components/Message';
import Box from './components/Box';
import Product from './components/Product';
import Employee from './components/Employee';
import Parent from './components/Parent';
// import logo from './logo.svg';
// import './App.css';


let Break = (props) => {
  return (<h1>{props.type}</h1>)
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'greetings'
    }
    console.log('App instance created');
  }

  changeMessage(message) {
    this.setState({ message })
  }

  renderMessage() {
    let { message } = this.state;
    if (message) {
      return <Message message={message} />
    } else {
      return null;
    }
  }

  componentDidCatch(error, info) {
    console.log('App :: componentDidCatch()');
  }

  render() {
    console.log('App render()');
    return (
      <div className="container">
        <div className="page-header"> React component API </div>
        <div className="panel panel-default">
          <div className="panel-heading">App Component </div>
          <div className="panel-body">
            <button onClick={() => { this.changeMessage('good morining') }} className="btn btn-default">GM</button>
            <button onClick={() => { this.changeMessage('good noon') }} className="btn btn-default">GN</button>
            <button onClick={() => { this.changeMessage('good evening') }} className="btn btn-default">GE</button>
            <button onClick={() => { this.changeMessage('') }} className="btn btn-default">Remove Message</button>
            <hr />
            {this.renderMessage()}

            <hr />
            
            <Break type="Chai Break" />

            <Box>
              <Product />
              <Product />
            </Box>
            <Box>
              <Employee />
              <Employee />
            </Box>

            <hr />

            <Parent />

          </div>
        </div>
      </div >
    );
  }
}

export default App;
