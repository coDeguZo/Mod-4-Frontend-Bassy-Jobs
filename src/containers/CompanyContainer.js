import React from "react"
import CompanyProfile from "../components/CompanyProfile"
import JobListing from "../components/JobListing"
import { Grid } from "semantic-ui-react"
import EditCompanyProfileInformation from "../components/EditCompanyProfileInformation"
import CompanyApplications from '../components/CompanyApplications'
import NewCompanyJobListingForm from '../components/NewCompanyJobListingForm'

class CompanyContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            name: "",
            email: "",
            details: false,
            jobCreate: false,
            selectedApplication: [],
            filteredApps: [],
            // password: "",
            education_level: "",
            experience_level: "",
            job_details: '',
            salary: "",
            companyJobListings: []
        }
    }

    fetchApplication = (id) => {
        fetch(`http://localhost:3000/apps/${id}`)
        .then(resp => resp.json())
        .then(data => {
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
            // debugger
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

    changeJobDetails = (event) => {
        console.log(event.target.value)
        this.setState( { [event.target.id]: event.target.value } )
    }

    editProfileInfo = () => {
        console.log("editing")
        const id = parseInt(localStorage.id)
        const obj = {
            name: this.state.name,
            email: this.state.email,
            details: this.job_details,
            salary: this.salary,
            education_level: this.education_level,
            experience_level: this.experience_level,
            company_id: id
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
            // debugger
            for(let i = 0; i < data.length; i++){
                // debugger
                if (data[i].job_listing_id === id){
                    // debugger
                    filtered.push(data[i])
                }
            }
            this.setState({ filteredApps: filtered })
        })
    }

    jobCreateStateChange = () => {
        this.setState({ jobCreate: !this.state.jobCreate })
    }

    createJobListing = (event) => {
        // debugger
        let id = parseInt(localStorage.id)
        const obj = {
            name: this.state.name,
            details: this.state.job_details,
            education_level: this.state.education_level,
            experience_level: this.state.experience_level,
            salary: this.state.salary,
            company_id: id,
            // status: "Open"
        }
        fetch("http://localhost:3000/job_listings", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(obj)
        }).then(resp => resp.json())
            this.setState({ jobCreate: false })
            //  .then(data => {
            //   this.props.addApplication(data)
            window.location.reload()
            // })
    }

    componentDidMount(){
        this.setState({ companyJobListings: this.props.company.job_listings})
    }

    render() {
        // debugger
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
                        <button onClick={this.jobCreateStateChange}> Create Job Listing </button>
                        {this.state.jobCreate === true ? <NewCompanyJobListingForm changeJobDetails={this.changeJobDetails} createJobListing={this.createJobListing}/> : null}
                        {/* {this.props.jobListings.map(j => <JobListing jobListingApps={this.jobListingApps} j={j} key={j.id}/>)} */}
                        {/* {this.props.company.job_listings.map(j => <JobListing jobListingApps={this.jobListingApps} j={j} key={j.id}/>)} */}
                        {this.props.companyJobListings === undefined || this.props.companyJobListings === [] ? this.props.currentCompanyJobListings.map(j => <JobListing jobListingApps={this.jobListingApps} j={j} key={j.id} deleteJobListing={this.deleteJobListing}/>) 
                        : 
                        this.props.company.job_listings.map(j => <JobListing jobListingApps={this.jobListingApps} j={j} key={j.id} deleteJobListing={this.deleteJobListing}/>)}
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div>
                        <h3> Users Who Have Applied to Jobs </h3>
                        {this.state.details === true ? 
                        // this.state.filteredApps.map(a => <CompanyApplications jobListings={this.props.jobListings} company={this.props.company} a={a} key={a.id} fetchApplication={this.fetchApplication}/>)
                        this.state.filteredApps.map(a => <CompanyApplications applications={this.props.applications} jobListings={this.props.company.job_listings} company={this.props.company} a={a} key={a.id} fetchApplication={this.fetchApplication}/>)
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