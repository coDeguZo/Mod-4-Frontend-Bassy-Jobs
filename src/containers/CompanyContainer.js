import React from "react"
import CompanyProfile from "../components/CompanyProfile"
import JobListing from "../components/JobListing"
import { Grid } from "semantic-ui-react"
import EditCompanyProfileInformation from "../components/EditCompanyProfileInformation"
import CompanyApplications from '../components/CompanyApplications'

class CompanyContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            name: "",
            email: "",
            details: false,
            selectedApplication: [],
            filteredApps: []
            // password: ""
        }
    }

    fetchApplication = (id) => {
        // debugger
        fetch(`http://localhost:3000/apps/${id}`)
        .then(resp => resp.json())
        .then(data => {
            // debugger
            this.setState({ 
                selectedApplication: data,
                details: true
            })
        })
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

    jobListingApps = (id) => {
        // let filter = this.props.applications.filter(a => id === a.job_listing.id)
        let filtered = []
        this.setState({ details: true })
        fetch('http://localhost:3000/apps/')
        .then(resp => resp.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                if (data[i].job_listing.id === id){
                    filtered.push(data[i])
                }
            }
            this.setState({ filteredApps: filtered })
        })
        // debugger
    }

    render() {
        return (
            <div> 
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                    <div className="profile-info-fixed">
                        <CompanyProfile company={this.props.company} edit={this.editProfileFormButton}/>
                        {this.state.edit ? <EditCompanyProfileInformation edit={this.editProfileInfo} name={this.state.name} address={this.state.address} phone={this.state.phoneNumber} email={this.state.email} onChangeInformation={this.onChangeInformation} /> : null}
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div>
                        <h1>Job Listings</h1>
                        {this.props.jobListings.map(j => <JobListing jobListingApps={this.jobListingApps} j={j} key={j.id}/>)}
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div>
                        <h3> Users Who Have Applied to Jobs </h3>
                        {this.state.details === true ? 
                        this.state.filteredApps.map(a => <CompanyApplications a={a} key={a.id} fetchApplication={this.fetchApplication}/>)
                        : null}
                    </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default CompanyContainer