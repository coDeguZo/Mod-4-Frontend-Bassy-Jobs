import React from "react"
import { useHistory, Link } from "react-router-dom"
import { Button, Card, Segment, Search } from 'semantic-ui-react'

const JobDetails = (props) => {
    // console.log("Selected Job:", props.selectedJob)
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
            <Segment style={{overflow: 'auto', maxHeight: 500 }}>
            <Card fluid className="job-details-card">
                <h1>{props.selectedJob.name}</h1>
                <h3>Experience Level: {props.selectedJob.experience_level}</h3>
                <h3>Education Required: {props.selectedJob.education_level}</h3>
                <h3>${props.selectedJob.salary}</h3>
                <h3>Job Details: </h3>
                <p>{props.selectedJob.details}</p>
                {/* <h3>Status: {props.selectedJob.status}</h3> */}
                {localStorage.email === undefined ? 
                <Link to={`/login`}>
                    <Button renderas="button">
                        Apply
                    </Button>
                </Link>
                : 
                <Link to={`/jobs/${props.selectedJob.id}/application-form`}>
                    <Button renderas="button">
                        Apply
                    </Button>
                </Link>
                }
            </Card>
            </Segment>
        </div>
    )
}

export default JobDetails