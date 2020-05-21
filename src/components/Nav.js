import React from "react"
import { Header } from 'semantic-ui-react'

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
            <div className="item">
                Home
            </div>
            <div className="item">
                About
            </div>
            <div className="item">
                Jobs
            </div>
            <div className="item">
                Login/Profile
            </div>
            </div>
        </div>
    )
    }
}

export default Nav