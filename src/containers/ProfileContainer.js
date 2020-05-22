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

    render(){
        return(
            <div>
                Profile Container
                <Profile user={this.props.user}/>
                {this.props.applications.map(a => <Application a={a} key={a.id}/>)}
            </div>
        )
    }
}

export default ProfileContainer