import React from "react"
import CompanyProfile from "../components/CompanyProfile"
import JobListing from "../components/JobListing"
import { Grid } from "semantic-ui-react"
import EditCompanyProfileInformation from "../components/EditCompanyProfileInformation"

class CompanyContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            name: "",
            email: ""
            // password: ""
        }
    }

    deleteJobListing = (id) => {
        fetch(`http://localhost:3000/job_listings/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
        .then(data => {
            this.props.deleteJobListingFromState(data.id)
        })
    }

    editProfileFormButton = () => {
        this.setState({ edit: !this.state.edit })
    }

    onChangeInformation = (event) => {
        console.log(event.target.value)
        this.setState( { [event.target.id]: event.target.value } )
    }

    editProfileInfo = () => {
        console.log("editing")
        const id = parseInt(localStorage.id)
        const obj = {
            name: this.state.name,
            email: this.state.email
        }
        fetch(`http://localhost:3000/companies/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",
                    "Accept" : "application/json"},
            body: JSON.stringify(obj)
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                edit: false
            })
            window.location.reload()
        })
    }

    render() {
        return (
            <div> 
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <div className="profile-info-fixed">
                        Employer Profile Container
                        <CompanyProfile company={this.props.company} edit={this.editProfileFormButton}/>
                        {this.state.edit ? <EditCompanyProfileInformation edit={this.editProfileInfo} name={this.state.name} address={this.state.address} phone={this.state.phoneNumber} email={this.state.email} onChangeInformation={this.onChangeInformation} /> : null}
                        {/* {this.state.edit ? <EditCompanyProfileInformation edit={this.editCompanyProfileInfo} name={this.state.name} email={this.state.email} onChangeInformation={this.onChangeInformation} /> : null} */}
                    </div>
                    </Grid.Column>
                    <div>
                        <h1>Job Listings</h1>
                        {this.props.jobListings.map(j => <JobListing j={j} key={j.id} jobListing={this.jobListing}/>)}
                    </div>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default CompanyContainer