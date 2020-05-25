import React from "react"
import { Header} from 'semantic-ui-react'
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
        <div>
            <div class="topnav">
            <Link class="active" to="/">Bassy Jobs</Link>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div class="topnav-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/jobs">Jobs</Link>
                {this.props.isLoggedIn === "true" ? <Link to="/profile">Profile</Link> : null}
                {this.props.isLoggedIn === "true" ? <Link onClick={this.props.logOut} to="/login"> Log Out</Link> : <Link to="/login">Log In</Link>}
            </div>
        </div>

        </div>
        ) 
    }
}

export default Nav


// import React from "react"
// import { Header} from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
// import {
//     Button,
//     Container,
//     Divider,
//     Grid,
//     Icon,
//     Image,
//     List,
//     Menu,
//     Responsive,
//     Segment,
//     Sidebar,
//     Visibility,
//   } from 'semantic-ui-react'

// class Nav extends React.Component {

//     render(){
//         return(
//         // <Menu pointing secondary>
//         //  <Fragment>
//         <div > 
//             <div className={`ui inverted blue menu navbar color`}>
//             <h2 className="ui header">
//                 <i className="blue icon"></i>
//                 <br/>
//                 <div className="content"> Bassy Jobs </div>
//                 <br /><br />
//             </h2>
//             <div className="item nav-bar" >
//                 <Link to="/">Home</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/about">About</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/jobs">Jobs</Link>
//             </div>
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link to="/profile">Profile</Link>
//             </div> 
//             :
//             null
//             }
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link onClick={this.props.logOut} to="/login">
//                 Log out
//             </Link>
//             </div>
//             :
//             <div className="item nav-bar">
//             <Link to="/login">Log In</Link>
//             </div>
//             }
//             </div>
//         </div>
//         ) 
//     }
// }

// export default Nav