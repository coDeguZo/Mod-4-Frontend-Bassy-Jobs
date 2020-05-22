import React from "react"
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    render(){
    return (
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
            <div className="item">
            <Link to="/profile">Profile</Link>
                {/* Login/Profile */}
            </div>
            </div>
        </div>
    )
    }
}

export default Nav