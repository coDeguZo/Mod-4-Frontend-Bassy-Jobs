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
import NewCompanyForm from './components/NewCompanyForm'
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import Redir from './components/Redir'
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

// export default class App extends React.Component {
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      masterJobListings: [],
      jobListings: [],
      currentCompanyJobListings: [],
      currentUserJobListings: [],
      user: {},
      company: {},
      applications: [],
      isLoggedIn: localStorage.loggedIn,
      name: "",
      password: "",
      email: "",
      address: "",
      phone_number: "",
      resume: "",
      error: true,
      employer: localStorage.is_employer,
    }
  }
  // localStorage["user"] = this.state.user.name
  updateCurrentUser = (u) => {
    this.setState({
      user: u,
      error: false,
      employer: "false"
    })
        // fetch("http://localhost:3000/users/1")
        fetch(`http://localhost:3000/users/${this.state.user.id}`)
        .then(resp => resp.json())
        .then(data => {
          //localStorage.clear()
          localStorage["id"] = JSON.stringify(data.id)
          localStorage["name"] = data.name
          localStorage["address"] = data.address
          localStorage["email"] = data.email
          // localStorage["phone_number"] = data.phone_number
          localStorage["is_employer"] = data.is_employer
          localStorage["resume"] = data.resume
          localStorage["error"] = "false"
          // localStorage["password"] = data.password
          localStorage.setItem("loggedIn", JSON.parse('true'))
          return this.setState({ user: data })
    })
    fetch(`http://localhost:3000/apps`)
    .then(resp => resp.json())
    .then(d => {
      const filteredApplications = d.filter(data => data.user.id === this.state.user.id)

      // let u = this.state.user
      // debugger
      // if(u.apps.length > filteredApplications.length){
      // filteredApplications.push(u.apps[u.apps.length-1])
      // }

        this.setState({applications: filteredApplications})
      }
    )
    this.setState({ isLoggedIn: "true" })
  }

  componentDidMount() {
    fetch("http://localhost:3000/job_listings")
      .then(resp => resp.json())
      .then(data => { 
        // const filteredJobListings = data.filter(d => d.company.id === this.state.company.id)
        this.setState({ 
          // currentCompanyJobListings: filteredJobListings,
          jobListings: data,
          masterJobListings: data
        })})
      // this.setState({ isLoggedIn: "true" })

    let id = parseInt(localStorage.id)
    if (this.state.employer === undefined){
      this.setState({ employer: null })
    }
    else if(this.state.employer === "false"){
      fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(data => {
          return this.setState({ user: data, currentUserJobListings: data.job_listings })
          // return this.setState({ user: data, applications: data.apps, currentUserJobListings: data.job_listings })
      })
    }else if(this.state.employer === "true"){
      fetch(`http://localhost:3000/companies/${id}`)
        .then(resp => resp.json())
        .then(data => {
          return this.setState({ 
            company: data, 
            currentCompanyJobListings: data.job_listings})
      })
    }
    
    // fetch(`http://localhost:3000/apps`)
    //   .then(resp => resp.json())
    //   .then(d => {
    //     const filteredApplications = d.filter(data => {
    //       if (data.user.id === this.state.user.id && this.state.employer === "false") {
    //         return data
    //       }else if(this.state.employer === "true" && this.state.company.id === data.job_listing.company_id) {
    //         return data
    //       }
    //     })
    //     this.setState({applications: filteredApplications})
    //   }
    // )
  }

  updateCurrentCompany = (c) => {
    this.setState({
      company: c,
      error: false,
      employer: "true"})
        fetch(`http://localhost:3000/companies/${this.state.company.id}`)
        .then(resp => resp.json())
        .then(data => {
          //localStorage.clear()
          localStorage["id"] = JSON.stringify(data.id)
          localStorage["name"] = data.name
          localStorage["email"] = data.email
          localStorage["is_employer"] = data.is_employer
          localStorage.setItem("loggedIn", JSON.parse('true'))
          localStorage["error"] = "false"
          return this.setState({ 
            company: data,
            applications: data.apps
           })
    })
    fetch(`http://localhost:3000/job_listings`)
    .then(resp => resp.json())
    .then(d => {
        const filteredJobListings = d.filter(data => data.company.id === this.state.company.id)
        this.setState({jobListings: filteredJobListings})
      }
    )
    this.setState({ isLoggedIn: "true" })

    // fetch(`http://localhost:3000/apps`)
    // .then(resp => resp.json())
    // .then(d => {
    //   const filteredApplications = d.filter(data => {
    //     if (data.user.id === this.state.user.id && this.state.employer === "false") {
    //       return data
    //     }else if(this.state.employer === "true" && this.state.company.id === data.job_listing.company_id) {
    //       return data
    //     }
    //   })
      // this.setState({applications: filteredApplications})
    // })
  }

  addApplication = (data) => {
    // this.setState({user: [...this.state.user.job_listings, data]})
    // debugger
    let u = this.state.user
    u.apps.push(data)
    this.setState({user: u})

    this.setState({applications: [...this.state.applications, data]}) // from backup
  }

  // applications: [...this.state.applications, data],

  deleteAppFromState = (id, jId) => {
    const s = this.state
    let filteredApplications
    if(this.state.applications.length > 0){
      filteredApplications = this.state.applications.filter(app => {
      return app.id !== id
      })
    } 
    if(this.state.user.apps.length > 0){
      filteredApplications = this.state.user.apps.filter(app => {
        return app.id !== id 
      })
    }
    this.setState({applications: filteredApplications})
    let u = this.state.user
    u.apps = filteredApplications
    // u
    let filteredUserJobListings = this.state.user.job_listings.filter(job => {
      return job.id !== jId
    })
    u.job_listings = filteredUserJobListings
    this.setState({ user: u })
    // window.location.reload()
  }

  deleteJobListingFromState = (id) => {
    const filteredJobListings = this.state.currentCompanyJobListings.filter(job => {
      return job.id !== id
    })
    // this.setState({jobListings: filteredJobListings})
    this.setState({currentCompanyJobListings: filteredJobListings})
    window.location.reload()
  }

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

  searchBar = (event) => {
    this.filteredByName(event)
  }

  filteredByName = (event) => {
    let filtered = this.state.masterJobListings.filter(job => {
      let text = event.target.value
      let str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
      return job.name.substring(0, event.target.value.length) === str})
    this.setState({jobListings: filtered})
  }

  logOut = () => {
    localStorage.clear()
    this.setState({ user: {}, 
      company: {},
      isLoggedIn: false,
      applications: [],
      currentCompanyJobListings: []
    })
      localStorage["error"] = "true"
      // window.location.reload()
  }

  signUpUser = (event) => {
    console.log(event.target.id)
    this.setState({ [event.target.id]: event.target.value })
  }
  
  signUpCompany = (event) => {
    this.setState({ [event.target.id]: event.target.value }) 
   }

  createNewUser = () => {
    // const obj = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phone_number: this.state.phone_number,
    //   address: this.state.address,
    //   resume: this.state.resume,
    //   password: this.state.password
    // }

    const obj = {
      user: {
        name: this.state.name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        address: this.state.address,
        resume: this.state.resume,
        password: this.state.password
      }
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
        // if(data.error_message){
        //   this.setState({ error: "true" })
        //   alert(data.error_message)
        // }else{
        //   this.setState({ error: "false" })
        //   this.updateCurrentUser(data)
        // }})
  }

  createNewCompany = () => {
    // const obj = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password
    // }

    const obj = {
      company: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    }
    fetch('http://localhost:3000/companies', {
      method: "POST",
      headers: {"Content-Type": "application/json",
        "Accept": "application/json"},
      body: JSON.stringify(obj)
      }).then(resp => resp.json())
      .then(data => {
        this.updateCurrentCompany(data)
        // this.updateCurrentCompany(data)
      })
  }

  render(){
    return (
      <div className="App">
        <Nav user={this.state.user} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn} employer={this.state.employer}/>
        <Switch>
        <Route exact path="/login" render={ () => <LoginForm updateCurrentUser={this.updateCurrentUser}  />}/>
        <Route exact path="/login-company" render={ () => <CompanyLoginForm updateCurrentCompany={this.updateCurrentCompany}/>} />
        <Route exact path="/sign-up" render={() => <NewUserForm signUpUser={this.signUpUser} createNewUser={this.createNewUser}/>}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        {/* <Route exact path="/profile" render={() => (
          this.state.error === false ? <ProfileContainer 
            user={this.state.user} 
            applications={this.state.applications}
            deleteAppFromState={this.deleteAppFromState}
          />
          : <Redirect to="/login"/>
        )} /> */}
        <Route exact path="/profile" render={() => <ProfileContainer 
          user={this.state.user} 
          applications={this.state.applications}
          deleteAppFromState={this.deleteAppFromState}
          currentJobListings={this.state.currentUserJobListings}
        />
        } />
        <Route exact path="/sign-up-company" render={ () => <NewCompanyForm signUpCompany={this.signUpCompany} createCompany={this.createNewCompany} />} />
        {/* <Route exact path="/redir" render={() => <Redir />}/> */}
        <Route exact path="/employer-profile" render={() => <CompanyContainer 
        company={this.state.company}
        // jobListings={this.state.company}
        currentCompanyJobListings={this.state.currentCompanyJobListings}
        deleteJobListingFromState={this.deleteJobListingFromState}
        applications={this.state.applications}
        users={null}
        />}/>
        {this.state.employer === "true" ? null
        :
        <Route path="/jobs" render={() => <JobContainer 
          user={this.state.user}
          searchBar={this.searchBar}
          sortJobListingsByEdLevel={this.sortJobListingsByEdLevel}
          sortJobListingsBySalary={this.sortJobListingsBySalary}
          sortJobListingsByExp={this.sortJobListingsByExp}
          jobListings={this.state.jobListings} 
          addApplication={this.addApplication}
          company={this.state.company}/>} /> }
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(App)