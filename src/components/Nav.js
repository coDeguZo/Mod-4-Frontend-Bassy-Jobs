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
    //     const getWidth = () => {
    //         const isSSR = typeof window === 'undefined'
    //         return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    //       }
    // return (
    //     <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
    //     <Visibility
    //       once={false}
    //       onBottomPassed={this.showFixedMenu}
    //       onBottomPassedReverse={this.hideFixedMenu}
    //     >
    //       <Segment
    //         inverted
    //         textAlign='center'
    //         style={{ minHeight: 700, padding: '1em 0em' }}
    //         vertical
    //       >
    //         <Menu
    //           fixed={fixed ? 'top' : null}
    //           inverted={!fixed}
    //           pointing={!fixed}
    //           secondary={!fixed}
    //           size='large'
    //         >
    //           <Container>
    //             <Menu.Item as='a' active>
    //               Home
    //             </Menu.Item>
    //             <Menu.Item as='a'>Work</Menu.Item>
    //             <Menu.Item as='a'>Company</Menu.Item>
    //             <Menu.Item as='a'>Careers</Menu.Item>
    //             <Menu.Item position='right'>
    //               <Button as='a' inverted={!fixed}>
    //                 Log in
    //               </Button>
    //               <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
    //                 Sign Up
    //               </Button>
    //             </Menu.Item>
    //           </Container>
    //         </Menu>
    //         <HomepageHeading />
    //       </Segment>
    //     </Visibility>

    //     {children}
    //   </Responsive>
        )
    }
}

export default Nav