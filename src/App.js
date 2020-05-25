import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Footer from "./components/Footer"
import ProfileContainer from './containers/ProfileContainer'
import CompanyContainer from "./containers/CompanyContainer"
import LoginForm from './components/LoginForm';
import CompanyLoginForm from './components/CompanyLoginForm';
import NewUserForm from './components/NewUserForm'
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import Redir from './components/Redir'
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      masterJobListings: [],
      jobListings: [],
      user: {},
      company: {},
      applications: [],
      isLoggedIn: localStorage.loggedIn,
      name: "",
      // password: "",
      email: "",
      address: "",
      phone_number: "",
      error: true
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
          localStorage["is_employer"] = data.is_employer
          // localStorage["password"] = data.password
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
    
    fetch(`http://localhost:3000/companies/${id}`)
      .then(resp => resp.json())
      .then(data => {
        return this.setState({ company: data })
    })
      
      fetch(`http://localhost:3000/apps`)
        .then(resp => resp.json())
        .then(d => {
          const filteredApplications = d.filter(data => data.user.id === this.state.user.id)
          this.setState({applications: filteredApplications})
      }
    )
  }

  updateCurrentCompany = (c) => {
    this.setState({company: c})
        fetch(`http://localhost:3000/companies/${this.state.company.id}`)
        .then(resp => resp.json())
        .then(data => {
          //localStorage.clear()
          localStorage["id"] = JSON.stringify(data.id)
          localStorage["name"] = data.name
          localStorage["email"] = data.email
          localStorage["is_employer"] = data.is_employer
          localStorage.setItem("loggedIn", JSON.parse('true'))
          // debugger
          return this.setState({ company: data })
    })
    fetch(`http://localhost:3000/job_listings`)
    .then(resp => resp.json())
    .then(d => {
        const filteredJobListings = d.filter(data => data.company.id === this.state.company.id)
        this.setState({jobListings: filteredJobListings})
      }
    )
    // debugger
    this.setState({ isLoggedIn: "true" })
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
      company: {},
      isLoggedIn: false,
      applications: [] })
  }

  signUpUser = (event) => {
    console.log(event.target.id)
    this.setState({ [event.target.id]: event.target.value })
  }

  createNewUser = () => {
    const obj = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      // password: this.state.password
      address: this.state.address,
    }
    
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {"Content-Type": "application/json",
        "Accept": "application/json"},
      body: JSON.stringify(obj)
      }).then(resp => resp.json())
      .then(data => {
        this.updateCurrentUser(data)
      })
  }

  errorMsg = () => {
    alert("no")
  }

  render(){
    return (
      <div className="App">
        <Nav user={this.state.user} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
        <Route exact path="/login" render={ () => <LoginForm errorMsg={this.state.errorMsg} updateCurrentUser={this.updateCurrentUser}  />}/>
        <Route exact path="/login-company" render={ () => <CompanyLoginForm errorMsg={this.state.errorMsg} updateCurrentCompany={this.updateCurrentCompany}/>} />
        <Route exact path="/sign-up" render={() => <NewUserForm signUpUser={this.signUpUser} createNewUser={this.createNewUser}/>}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={() => this.state.user === {} ? <Redir to="/login"/> :
        <ProfileContainer 
          user={this.state.user} 
          applications={this.state.applications}
          deleteAppFromState={this.deleteAppFromState}
        />
        } />
        <Route exact path="/employer-profile" render={() => <CompanyContainer company={this.state.company}/>}/>
        <Route path="/jobs" render={() => <JobContainer 
          sortJobListingsByEdLevel={this.sortJobListingsByEdLevel}
          sortJobListingsBySalary={this.sortJobListingsBySalary}
          sortJobListingsByExp={this.sortJobListingsByExp}
          jobListings={this.state.jobListings} 
          addApplication={this.addApplication}/>} />
          {/* Breaks code and takes us home. */}
        <Route exact path="/profile" render={() => <Redirect />}/>
        </Switch>
      </div>
    );
  }
}

