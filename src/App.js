import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import ProfileContainer from './containers/ProfileContainer'
// import Login from './components/Login';
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import ApplicationFormContainer from './containers/ApplicationFormContainer'
import './App.css';
import {Route, Switch} from 'react-router-dom'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jobListings: [],
      user: {},
      applications: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/job_listings")
    .then(resp => resp.json())
    .then(data => this.setState({ jobListings: data }))

    fetch("http://localhost:3000/users/5")
    .then(resp => resp.json())
    .then(data => {
      this.setState({ user: data })
    })

    fetch(`http://localhost:3000/apps`)
        .then(resp => resp.json())
        .then(d => {
            const filteredApplications = d.filter(data => data.user.id === this.state.user.id)
            this.setState({applications: filteredApplications})
          }
        )
  }



  render(){
    return (
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={() => <ProfileContainer 
          user={this.state.user} 
          applications={this.state.applications}
        />}/>
        {/* <Login /> */}
        {/* <User />
        <Company /> */}
        <Route exact path="/jobs" render={() => <JobContainer 
          jobListings={this.state.jobListings}/>}/>
        <Route exath path="/jobs/application-form" render={() => <ApplicationFormContainer
        />}/>
        {/* <ApplicationContainer applications={this.state.applications}/> */}
        </Switch>
      </div>
    );
  }
}

