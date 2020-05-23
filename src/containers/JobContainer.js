import React from 'react';
import Job from '../components/Job'
import JobDetails from '../components/JobDetails'
import ApplicationForm from '../components/ApplicationForm'
import {Route, Switch} from 'react-router-dom'
import JobContainerDropdown from '../components/JobContainerDropdown';
import { Card, Grid } from 'semantic-ui-react'
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
    
    let obj = {
      application_date: dateTime,
      job_listing_id: this.state.selectedJob.id,
      status: "pending",
      user_id: parseInt(localStorage.id)
    }
    
    fetch(`http://localhost:3000/apps`, {
      method: "POST",
      headers: {"Content-Type": "application/json",
                "Accept": "application/json"},
      body: JSON.stringify(obj)
    }).then(resp => resp.json())
      //  .then(data => {
      //   this.props.addApplication(data)
        // window.location()
      // })
  }

  render(){
    return (
      <div className="job-container">
        <Switch>
          <Route exact path={"/jobs"} render={ () => 
             <div>
               <JobContainerDropdown/>
               <br/>
               <br/>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column>
                {
                  this.props.jobListings.map(j => 
                  <Job j={j} key={j.id} selectedJob={this.state.selectedJob} fetchJob={this.props.fetchJob} fetchJob={this.fetchJob}/>
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
              // debugger
            return <ApplicationForm
            selectedJob={job} handleSubmit={this.applyForJob}/>}}/>
          {/* </Grid> */}
          </div>
        </Switch>
      </div>
      );
    }
  }