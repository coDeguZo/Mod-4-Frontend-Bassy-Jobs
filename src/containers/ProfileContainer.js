import React from "react"
import Profile from "../components/Profile"
import Application from "../components/Application"
import EditProfileInformation from "../components/EditProfileInformation"
import { Grid, Segment } from 'semantic-ui-react'

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
        }
    }

    deleteApplication = (id, jId) => {

        fetch(`http://localhost:3000/apps/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
        .then(data => {
            this.props.deleteAppFromState(data.id, jId)
        })
    }

    editProfileFormButton = () => {
        this.setState({ edit: !this.state.edit })
    }

    onChangeInformation = (event) => {
        console.log("event", event.target.value)
        this.setState( { [event.target.id]: event.target.value } )
    }

    editProfileInfo = () => {
        console.log("editing")
        const id = parseInt(localStorage.id)
        let rawObj = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone,
            address: this.state.address,
            resume: this.state.resume
        }

        let newObj = Object.values(rawObj)
        for(let i = 0; i < newObj.length; i++){
            if(newObj[i] === ""){
                let index = newObj.indexOf(i);
                if (index > -1) {
                    newObj.splice(index, 1);
                 }
            }
        }
        if (this.state.name.length === 0 || this.state.address.length === 0 || this.state.phone.length === 0 || this.state.email.length === 0 || this.state.resume.length === 0){
            alert("All entries must be filled")
        }
        else {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",
                    "Accept" : "application/json"},
            body: JSON.stringify(rawObj)
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                edit: false
            })
            window.location.reload()
        })
        }
    }

    render(){
        // window.location.reload(false)
        // console.log("profile container props", this.props)
        // joblisting id = 6, app id = 20
        // debugger
        return(
            <div>
            <div >
              <Grid className="profile-container" columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <div className="profile-info-fixed profile">
                        <Profile user={this.props.user} edit={this.editProfileFormButton}/>
                        {this.state.edit ? <EditProfileInformation edit={this.editProfileInfo} name={this.state.name} address={this.state.address} phone={this.state.phoneNumber} email={this.state.email} resume={this.state.resume} onChangeInformation={this.onChangeInformation} /> : null}
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div className="profile">
                        <h1>Applications</h1>
                        {this.props.user.job_listings === undefined ? this.props.applications.map(a => <Application a={a} key={a.id} deleteApplication={this.deleteApplication} currentJobListings={this.props.currentJobListings}/>)
                        : this.props.user.job_listings.map(a => <Application a={a} key={a.id} deleteApplication={this.deleteApplication} currentJobListings={this.props.currentJobListings}/>)}
                        {/* {this.props.user.apps.map(a => <Application a={a} key={a.id} deleteApplication={this.deleteApplication} currentJobListings={this.props.currentJobListings}/>)} */}
                        
                        
                        {/* {this.props.currentJobListings.map(j => <Application j={j} key={j.id} deleteApplication={this.deleteApplication} companyId={j.company_id}/>)} */}
                        <br />
                    </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default ProfileContainer