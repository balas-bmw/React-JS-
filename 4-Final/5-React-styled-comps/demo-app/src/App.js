import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import styled, { keyframes } from 'styled-components';

const spin=keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Outer = styled.div`
  text-align: center;
`
const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;

  > h1{
    color:${props=>props.dark?'black;':'white'};
  }
`
const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  ${props=>props.backwards && 'animation-direction: reverse;'}
  height: 80px;
`

const Intro = styled.p`
  font-size: large;
`


class App extends Component {
  render() {
    return (
      <Outer>
        <Header >
          <Logo src={logo} alt="logo" />
          <Logo backwards src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Outer>
    );
  }
}

export default App;
