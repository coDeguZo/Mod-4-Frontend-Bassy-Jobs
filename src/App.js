import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Footer from "./components/Footer"
import ProfileContainer from './containers/ProfileContainer'
import LoginForm from './components/LoginForm';
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      masterJobListings: [],
      jobListings: [],
      user: {},
      applications: [],
      isLoggedIn: localStorage.loggedIn
    }
  }
  // localStorage["user"] = this.state.user.name
  updateCurrentUser = (u) => {
    this.setState({user: u})
        // fetch("http://localhost:3000/users/1")
        fetch(`http://localhost:3000/users/${this.state.user.id}`)
        .then(resp => resp.json())
        .then(data => {
          //localStorage.clear()
          localStorage["id"] = JSON.stringify(data.id)
          localStorage["name"] = data.name
          localStorage["address"] = data.address
          localStorage["email"] = data.email
          localStorage["phone_number"] = data.phone_number
          localStorage.setItem("loggedIn", JSON.parse('true'))
          // debugger
          return this.setState({ user: data })
    })
    fetch(`http://localhost:3000/apps`)
    .then(resp => resp.json())
    .then(d => {
        const filteredApplications = d.filter(data => data.user.id === this.state.user.id)
        this.setState({applications: filteredApplications})
      }
    )
    // debugger
    this.setState({ isLoggedIn: "true" })
  }

  componentDidMount() {
    // debugger
    fetch("http://localhost:3000/job_listings")
    .then(resp => resp.json())
    .then(data => this.setState({ 
      jobListings: data,
      masterJobListings: data
    }))

    let id = parseInt(localStorage.id)
    fetch(`http://localhost:3000/users/${id}`)
    .then(resp => resp.json())
    .then(data => {
      return this.setState({ user: data })
      })
      
      fetch(`http://localhost:3000/apps`)
      .then(resp => resp.json())
      .then(d => {
        const filteredApplications = d.filter(data => data.user.id === this.state.user.id)
        this.setState({applications: filteredApplications})
      }
    )
    // if(this.localStorage.isLoggedIn === "true"){
    //   this.localStorage.isLoggedIn = true
    // }
    // this.setState({ isLoggedIn: true })
    // let bool = localStorage.loggedIn.
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

  sortJobListingsByExp = (event) => {
    console.log("exp", event.target.innerText)
    const expLevel = event.target.innerText

    if(expLevel === 'All' || expLevel === ''){
      this.setState({jobListings: this.state.masterJobListings})
    }else{
      const sortedByExp = this.state.masterJobListings.filter(job => {
        return job.experience_level === expLevel
      })
      this.setState({ jobListings: sortedByExp })
    }
  }

  sortJobListingsByEdLevel = (event) => {
    console.log("EDU", event.target.innerText)
    const edLevel = event.target.innerText

    if(edLevel === 'All' || edLevel === ''){
      this.setState({jobListings: this.state.masterJobListings})
    }else{
      const sortedByEd = this.state.masterJobListings.filter(job => {
        return job.education_level === edLevel
      })
      this.setState({ jobListings: sortedByEd })
    }
  }

  logOut = () => {
    localStorage.clear()
    this.setState({ user: {}, 
      isLoggedIn: false,
      applications: [] })
  }

  render(){
    return (
      <div className="App">
        <Nav user={this.state.user} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
        <Route exact path="/login" render={ () => <LoginForm updateCurrentUser={this.updateCurrentUser}  />}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={() => <ProfileContainer 
          user={this.state.user} 
          applications={this.state.applications}
          deleteAppFromState={this.deleteAppFromState}
        />}/>
        {/* <Company /> */}
        <Route path="/jobs" render={() => <JobContainer 
          sortJobListingsByEdLevel={this.sortJobListingsByEdLevel}
          sortJobListingsBySalary={this.sortJobListingsBySalary}
          sortJobListingsByExp={this.sortJobListingsByExp}
          jobListings={this.state.jobListings} 
          addApplication={this.addApplication}/>
          }/>
        {/* <ApplicationContainer applications={this.state.applications}/> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

