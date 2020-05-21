import React from 'react';
import Jobs from '../components/Jobs'
import JobDetails from '../components/JobDetails'

export default class JobContainer extends React.Component {
  // constructor(){

  // }

  render(){
    return (
      <div className="App">
        <Jobs />
        <JobDetails />
      </div>
    );
  }
}
