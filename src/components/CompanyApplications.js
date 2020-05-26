import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import { Link } from "react-router-dom"

class CompanyApplications extends React.Component {
    constructor(){
        super()
        this.state = {
            dropdownValue: "pending"
        }
    }

    handleSelectChange = (event) => {
        this.setState({ dropdownValue: event.target.value})
    }

    filterJobListingId = () => {
        let jobs = this.props.jobListings.filter(job =>  job.id === this.props.a.job_listing.id)
        return jobs
    }

    changeStatus = (event) => {
        const obj = {
            status: this.state.dropdownValue
        }
        fetch(`http://localhost:3000/apps/${this.filterJobListingId()[0].id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(obj)
        })
        window.location.reload()
    }

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
                            <select onChange={this.handleSelectChange}>
                                <option id="pending" value="pending">Pending</option>
                                <option id="accepted" value="accepted">Accepted</option>
                                <option id="declined" value="declined">Declined</option>
                            </select>
                            <button onClick={this.changeStatus}>Submit</button>
                            {/* <button onClick={this.filterJobListingId}>Submit</button> */}
                        </Card.Content>
                    {/* </Link> */}
                </Card>
            </div>
        )
    }
}

export default CompanyApplications