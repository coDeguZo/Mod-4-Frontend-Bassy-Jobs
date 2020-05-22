import React from 'react';
import Job from '../components/Job'
import JobDetails from '../components/JobDetails'
import ApplicationForm from '../components/ApplicationForm'
import {Route, Switch} from 'react-router-dom'
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
    this.setState({ details: !this.state.details })
  }

  // handleButton = (event) => {
  //   this.setState({ details: !this.state.details })
  // }

  render(){
    console.log("job container: ", this.props)
    return (
      <div className="job-container">
        <Switch>
          <Route exact path={"/jobs"} render={ () => 
             <div>
             {
               this.props.jobListings.map(j => <Job j={j} key={j.id} fetchJob={this.props.fetchJob} fetchJob={this.fetchJob}/>) 
             }   
             <div>
               {this.state.details === true ? <JobDetails selectedJob={this.state.selectedJob}/> : null}
             </div>
           </div>
          } />
          <div>
            <Route exact path={`/jobs/${this.state.selectedJob.id}/application-form`} render={() => <ApplicationForm
            selectedJob={this.state.selectedJob}/>}/>
          </div>
        </Switch>
      </div>
    );
      }
  }
