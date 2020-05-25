import React from "react"
import CompanyProfile from "../components/CompanyProfile"
import { Grid } from "semantic-ui-react"

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

    render() {
        return (
            <div> 
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <div className="profile-info-fixed">
                        Employer Profile Container
                        <CompanyProfile company={this.props.company} edit={this.editProfileFormButton}/>
                        {/* {this.state.edit ? <EditCompanyProfileInformation edit={this.editCompanyProfileInfo} name={this.state.name} email={this.state.email} onChangeInformation={this.onChangeInformation} /> : null} */}
                    </div>
                    </Grid.Column>
                    <div>
                        <h1>Job Listings</h1>
                        {/* {this.props.applications.map(a => <JobListing a={a} key={a.id} jobListing={this.jobListing}/>)} */}
                    </div>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default CompanyContainer