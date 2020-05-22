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
        // console.log(this.props.)
        fetch(`http://localhost:3000/apps`)
        .then(resp => resp.json())
        .then(d => d.filter(data => data.user.id === this.props.number ? this.setState({applications: data}) : null))  
    }

    render(){
        // console.log(this.props.user.id)
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