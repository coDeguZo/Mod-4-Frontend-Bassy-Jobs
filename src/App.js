import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import ProfileContainer from './containers/ProfileContainer'
// import Login from './components/Login';
// import User from './components/User';
// import Company from './components/Company';
import JobContainer from './containers/JobContainer';
import ApplicationContainer from './containers/ApplicationContainer'
import './App.css';
import {Route, Switch} from 'react-router-dom'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jobListings: [],
      user: [],
      number: 5
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/job_listings")
    .then(resp => resp.json())
    .then(data => this.setState({ jobListings: data }))

    fetch("http://localhost:3000/users/5")
    .then(resp => resp.json())
    .then(data => this.setState({user: data}))
  }



  render(){
    return (
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/about" component={About} />
    //       <Route exact path="/jobs" render={() => <JobContainer
    //         onSearchHandler={this.onSearchHandler}
    //         filterTerm={this.state.searchTerm}
    //         paintings={this.state.paintingsList}
    //         onSelectPainting={this.onSelectPainting}
    //       />} />
    //       <Route exact path="/paintings/:id" render={
    //         (routerProps) => {
    //           //get the ID here in this function
    //           let id = routerProps.match.params.id
    //           //find the painting object in my paintingsList [] with this id
    //           let painting = this.state.paintingsList.find(p => p.id == id)
    //           console.log("what is my painting?", painting)
    //           return <PaintingDetails painting={painting}/>
    //         }
    //       }
    //       />
    //       <Route render={() => <div>404 Not Found</div>}/>
    //     </Switch>
    //   </div>
    // );
    // return (
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={() => <ProfileContainer 
          user={this.state.user} 
          number={this.state.user.id}
        />}/>
        {/* <Login /> */}
        {/* <User />
        <Company /> */}
        <Route exact path="/jobs" render={() => <JobContainer 
          jobListings={this.state.jobListings}/>}/>
        {/* <ApplicationContainer applications={this.state.applications}/> */}
        </Switch>
      </div>
    );
  }
}

