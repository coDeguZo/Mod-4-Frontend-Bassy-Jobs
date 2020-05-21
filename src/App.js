import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import ProfileContainer from './containers/ProfileContainer'
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
      jobListings: [],
      applications: [],
      user: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/job_listings")
    .then(resp => resp.json())
    .then(data => this.setState({ jobListings: data }))

    fetch("http://localhost:3000/users/5")
    .then(resp => resp.json())
    .then(data => this.setState({user: data}))

    // fetch("http://localhost:3000/apps")
    // .then(resp => resp.json())
    // .then(data => {
    //   data.filter(d => {
    //       // debugger
    //     if (d.user.id === this.state.user.id) {
    //       this.setState({applications: d})
    //       debugger
    //     }
    //   })
    // })
    // .then(data => console.log(data))
  }



  render(){
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <ProfileContainer user={this.state.user}/>
        {/* <Login /> */}
        {/* <User />
        <Company /> */}
        <JobContainer jobListings={this.state.jobListings}/>
        {/* <ApplicationContainer applications={this.state.applications}/> */}
      </div>
    );
  }
}

