import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
// import Login from './components/Login';
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import ApplicationContainer from './containers/ApplicationContainer'
import './App.css';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        {/* <Login /> */}
        {/* <User />
        <Company /> */}
        <JobContainer />
        <ApplicationContainer />
      </div>
    );
  }
}

