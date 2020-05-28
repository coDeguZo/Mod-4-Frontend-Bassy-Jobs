import React from 'react';
import Job from '../components/Job'
import JobDetails from '../components/JobDetails'
import ApplicationForm from '../components/ApplicationForm'
import {Route, Switch} from 'react-router-dom'
import JobContainerDropdown from '../components/JobContainerDropdown';
import { Card, Grid } from 'semantic-ui-react'
import jobListing from '../components/JobListing';
// import {Router, Route, Switch} from 'react-router-dom'


export default class JobContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      details: false,
      selectedJob: []
    }
  }

  fetchJob = (id) => {
    fetch(`http://localhost:3000/job_listings/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({ selectedJob: data }))
    this.setState({ details: true })
  }

  applyForJob = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    // let jl = this.props.jobListings.filter(job => {
    //   return job.id === this.state.selectedJob.id
    // })
    // debugger
    let obj = {
      application_date: dateTime,
      job_listing_id: this.state.selectedJob.id,
      user_id: parseInt(localStorage.id)
      // job_listing: {
      //   name: jl[0].name,
      //   salary: jl[0].salary
      // },
      // company: {
      //   name: jl[0].company.name
      // }
    }
    
    fetch(`http://localhost:3000/apps`, {
      method: "POST",
      headers: {"Content-Type": "application/json",
                "Accept": "application/json"},
      body: JSON.stringify(obj)
    }).then(resp => resp.json())
    .then(data => {
      let jl = this.props.jobListings.filter(job => {
        return job.id === this.state.selectedJob.id
      })
      console.log("jl", jl)
      let jnestedObj = {
        id: jl[0].id,
        name: jl[0].name,
        salary: jl[0].salary,
        company_id: jl[0].company.id
      }
      // let companyId = {
      //   id: jl[0].company.id
      // }
      data.job_listing = jnestedObj
      console.log("jnestedObj", jnestedObj)
      // data.company = companyId
      this.props.addApplication(data)
      window.location.reload()
    })
  }

  render(){
    return (
      <div className="job-container">
        <Switch>
          <Route exact path={"/jobs"} render={ () => 
             <div className="job-container">
               <JobContainerDropdown 
                searchBar={this.props.searchBar}
                sortJobListingsByEdLevel={this.props.sortJobListingsByEdLevel}
                sortJobListingBySalary={this.props.sortJobListingsBySalary} 
                sortJobListingsByExp={this.props.sortJobListingsByExp}
              />
               <br/>
               <br/>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column>
                {
                  this.props.jobListings.map(j => 
                  <Job j={j} key={j.id} selectedJob={this.state.selectedJob} fetchJob={this.fetchJob}/>
                  ) 
                }   
                  </Grid.Column>
                  <Grid.Column>
                  <div className="job-details">
                    {this.state.details === true ? <JobDetails selectedJob={this.state.selectedJob}/> : null}
                  </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
           </div>
          } />
          <div>
            <Route exact path={"/jobs/:id/application-form"} render={(props) => {    
              let id = parseInt(props.match.params.id)
              let job = this.props.jobListings.find(j => j.id === id)
            return <ApplicationForm
            user={this.props.user}
            selectedJob={job} handleSubmit={this.applyForJob}/>}}/>
          {/* </Grid> */}
          </div>
        </Switch>
        <br /><br />

      </div>
      );
    }
  }