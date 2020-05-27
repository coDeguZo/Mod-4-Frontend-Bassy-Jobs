import React from "react"
import Profile from "../components/Profile"
import Application from "../components/Application"
import EditProfileInformation from "../components/EditProfileInformation"
import { Grid } from 'semantic-ui-react'

class ProfileContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            name: "",
            address: "",
            phone: "",
            email: "",
            resume: ""
            // password: ""
        }
    }

    deleteApplication = (id) => {
        fetch(`http://localhost:3000/apps/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
        .then(data => {
            this.props.deleteAppFromState(data.id)
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
            email: this.state.email,
            phone_number: this.state.phone,
            address: this.state.address,
            resume: this.state.resume
            // password: this.state.password
        }
        fetch(`http://localhost:3000/users/${id}`, {
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

    render(){
        // window.location.reload(false)
        // debugger
        console.log(this.props)
        return(
            <div>
              <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <div className="profile-info-fixed">
                        Profile Container
                        <Profile user={this.props.user} edit={this.editProfileFormButton}/>
                        {this.state.edit ? <EditProfileInformation edit={this.editProfileInfo} name={this.state.name} address={this.state.address} phone={this.state.phoneNumber} email={this.state.email} onChangeInformation={this.onChangeInformation} /> : null}
                    </div>
                    </Grid.Column>
                    <div>
                        <h1>Applications</h1>
                        {/* {this.props.applications.map(a => <Application a={a} key={a.id} deleteApplication={this.deleteApplication}/>)} */}
                        {this.props.currentJobListings.map(j => <Application j={j} key={j.id} deleteApplication={this.deleteApplication} companyId={j.company_id}/>)}
                    </div>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default ProfileContainer