import React from "react"
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

class Nav extends React.Component {

    render(){
        return(
        // <Menu pointing secondary>
        //  <Fragment>
        <div> 
            <div className={`ui inverted blue menu navbar`}>
            <h2 className="ui header">
                <i className="blue icon"></i>
                <br/>
                <div className="content">Bassy Jobs</div>
            </h2>
            <div className="item" >
                <Link to="/">Home</Link>
            </div>
            <div className="item">
                <Link to="/about">About</Link>
            </div>
            <div className="item">
                <Link to="/jobs">Jobs</Link>
            </div>
            {this.props.isLoggedIn === "true" ?
            <div className="item">
            <Link to="/profile">Profile</Link>
            </div> 
            :
            null
            }
            {this.props.isLoggedIn === "true" ?
            <div className="item">
            <Link onClick={this.props.logOut} to="/login">
                Log out
            </Link>
            </div>
            :
            <div className="item">
            <Link to="/login">Log In</Link>
            </div>
            }
            </div>
        </div>
        ) 
    }
}

{/* <Link to={`/jobs/${props.selectedJob.id}/application-form`}>
<Button renderas="button">
    <span>Apply</span>
</Button>
</Link> */}

export default Nav