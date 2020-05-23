import React from "react"
import Profile from "../components/Profile"
import Application from "../components/Application"

class ProfileContainer extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
            // applications: []
    //     }
    // }

    deleteApplication = (id) => {
        console.log("deleting", id)
        console.log(this.props)
        fetch(`http://localhost:3000/apps/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
        .then(data => {
            this.props.deleteAppFromState(data.id)
        })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                Profile Container
                <Profile user={this.props.user}/>
                <br></br>
                <h1>Applications</h1>
                {this.props.applications.map(a => <Application a={a} key={a.id} deleteApplication={this.deleteApplication}/>)}
            </div>
        )
    }
}

export default ProfileContainer