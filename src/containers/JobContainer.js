import React from 'react';
import Job from '../components/Job'
import JobDetails from '../components/JobDetails'

export default class JobContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      details: false,
      selectedJob: []
    }
  }

  fetchJob = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/job_listings/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({ selectedJob: data }))
    this.setState({ details: !this.state.details })
  }

  // handleButton = (event) => {
  //   this.setState({ details: !this.state.details })
  // }

  render(){
    // console.log("job container: ", this.props)
    return (
      <div className="job-container">
        {
          this.props.jobListings.map(j => <Job j={j} key={j.id} fetchJob={this.props.fetchJob} fetchJob={this.fetchJob}/>) 
        }   
        <div>
          {this.state.details === true ? <JobDetails selectJob={this.state.selectedJob}/> : null}
        </div>
      </div>
    );
  }
}
