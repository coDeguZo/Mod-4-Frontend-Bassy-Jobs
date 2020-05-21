import React from 'react';
import Application from '../components/Application'

export default class ApplicationContainer extends React.Component {
  // constructor(){
  //   super()
  // }

  render(){
    // console.log("applications: ", this.props)
    return (
      <div className="application-container">
        {this.props.applications.map(a => <Application a={a} key={a.id}/>)}
      </div>
    );
  }
}
