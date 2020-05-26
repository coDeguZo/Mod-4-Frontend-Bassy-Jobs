import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import { Link } from "react-router-dom"

class CompanyApplications extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Card fluid className="job-card">
                    {/* <Link> */}
                        <Card.Content>
                            <h1>Company Applications</h1>
                            <h3>Application date: {this.props.a.application_date}</h3>
                            <h3>Status: {this.props.a.status}</h3>
                            <h3>Name of applicant: {this.props.a.user.name}</h3>
                            <h3>Email of applicant: {this.props.a.user.email}</h3>
                            <h3>Phone number of applicant: {this.props.a.user.phone_number}</h3>
                            <h3>Address of applicant: {this.props.a.user.address}</h3>
                        </Card.Content>
                    {/* </Link> */}
                </Card>
            </div>
        )
    }
}

export default CompanyApplications