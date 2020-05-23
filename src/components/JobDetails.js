import React from "react"
import { useHistory, Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'

const JobDetails = (props) => {
    console.log("Selected Job:", props.selectedJob)
    // routeChange = () => {
    //     let  = `newPath`;
    //     let history = useHistory();
    //     history.push(path);
    //   }

    let history = useHistory()

    function handleClick() {
        history.push(`/jobs/${props.selectedJob.id}/application-form`)
        // return(
            // <Link to=`/jobs/${props.selectedJob.id}/application-form`>Profile</Link>
        // )
    }

//   <Link to="/login">
//      <Button renderAs="button">
//          <span>Login</span>
//      </Button>
//   </Link>

    return (
        <div> 
            {props.selectedJob.name}
            <h1>{props.selectedJob.name}</h1>
            <h3>Experience Level: {props.selectedJob.experience_level}</h3>
            <h3>Education Required: {props.selectedJob.education_level}</h3>
            <h3>${props.selectedJob.salary}</h3>
            <h3>{props.selectedJob.details}</h3>
            <h3>Status: {props.selectedJob.status}</h3>
            <Link to={`/jobs/${props.selectedJob.id}/application-form`}>
                <Button renderas="button">
                    <span>Apply</span>
                </Button>
            </Link>


            {/* <button onClick={handleClick}>Apply For This Job</button> */}

            {/* <Link to="/jobs/">Gallery Page</Link> */}
            {/* <button onClick={to="/"}>Apply For This job</button> */}
            {/* onClick={() => history.push('/Products')} */}
        </div>
    )
}

export default JobDetails