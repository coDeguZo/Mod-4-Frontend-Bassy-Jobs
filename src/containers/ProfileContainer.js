import React from "react"
import Profile from "../components/Profile"
import ProfileApplications from "../components/ProfileApplications"

class ProfileContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            applications: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/apps`)
        .then(resp => resp.json())
        .then(d => d.filter(data => {
            if (data.id === this.props.user.id) {
                return this.setState({ applications: data })
            }
        }))
    }

    render(){
        return(
            <div>
                Profile Container
                <Profile user={this.props.user}/>
                <ProfileApplications apps={this.state.applications}/>
            </div>
        )
    }
}

export default ProfileContainer