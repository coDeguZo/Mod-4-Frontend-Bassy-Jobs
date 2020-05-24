import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Footer from "./components/Footer"
import ProfileContainer from './containers/ProfileContainer'
// import Login from './components/Login';
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import './App.css';
import {Route, Switch} from 'react-router-dom'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      masterJobListings: [],
      jobListings: [],
      user: {},
      applications: []
    }
  }

  // localStorage["user"] = this.state.user.name

  componentDidMount() {
    fetch("http://localhost:3000/job_listings")
    .then(resp => resp.json())
    .then(data => this.setState({ 
      jobListings: data,
      masterJobListings: data
    }))

    fetch("http://localhost:3000/users/13")
    .then(resp => resp.json())
    .then(data => {
      //localStorage.clear()
      localStorage["id"] = JSON.stringify(data.id)
      localStorage["name"] = data.name
      localStorage["address"] = data.address
      localStorage["email"] = data.email
      localStorage["phone_number"] = data.phone_number
      return this.setState({ user: data })
    })

    fetch(`http://localhost:3000/apps`)
        .then(resp => resp.json())
        .then(d => {
            const filteredApplications = d.filter(data => data.user.id === this.state.user.id)
            this.setState({applications: filteredApplications})
          }
        )
  }

  addApplication = (data) => {
    this.setState({applications: [...this.state.applications, data]})
  }

  deleteAppFromState = (id) => {
    const filteredApplications = this.state.applications.filter(app => {
      return app.id !== id
    })
    this.setState({applications: filteredApplications})
  }

  // resetJobListings = () => {
  //   this.setState({jobListings: this.state.masterJobListings})
  // }

  sortJobListingsBySalary = (event) => {
    const salaryRangeArr = event.target.innerText.replace("$", "").replace("$", "").replace("+", "").split("-")
    if(salaryRangeArr[0] === 'All' || salaryRangeArr[0] === ''){
      this.setState({jobListings: this.state.masterJobListings})
    }else{
    
    if(salaryRangeArr.length === 1){
      salaryRangeArr.push(salaryRangeArr[0] * 1000)
    }

    const sortedBySalary = this.state.masterJobListings.filter(job => {
      return job.salary >= parseInt(salaryRangeArr[0]) && job.salary <= parseInt(salaryRangeArr[1])
    })
    this.setState({ jobListings: sortedBySalary })
    }
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
          deleteAppFromState={this.deleteAppFromState}
        />}/>
        {/* <Login /> */}
        {/* <User />
        <Company /> */}
        <Route path="/jobs" render={() => <JobContainer 
          sortJobListingsBySalary={this.sortJobListingsBySalary}
          jobListings={this.state.jobListings} 
          addApplication={this.addApplication}/>
          }/>
        {/* <ApplicationContainer applications={this.state.applications}/> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

