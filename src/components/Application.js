//child of ProfileContainer
import React from "react"
import { Grid, Image, Card } from 'semantic-ui-react'
// import greyBox from `../images/grey_box.jpg`

class Application extends React.Component{
    constructor(){
        super()
        this.state = {
            appCompanyName: "",
            id: this.fetchApplicationId()
        }
    }

    // componentWillMount() {
    // fetch('http://localhost:3000/companies')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         // before crash:
    //         // object that includes company_id: 1
    //         // cause of crash:
    //         // this.props.a.job_listing === {id: 2, name: "TelePrompter", salary: 100000}
    //         // let company = data.filter(c => c.id === this.props.j.company_id)
    //         // debugger
    //         // let appArr = []
    //         // for(let i = 0; i < this.props.currentJobListings.length; i++){
    //         //     for(let f = 0; f < data.length; f++){
    //         //         if(data[f].id === this.props.currentJobListings[i].company_id){
    //         //             // debugger
    //         //             this.setState({ appCompanyName: data[i].name })
    //         //         }
    //         //     }
    //         // }
    //         let company = data.filter(c => c.id === this.props.a.company_id)
    //         this.setState({ appCompanyName: company[0].name })
    //         console.log(this.state.appCompanyName)
    //     })
    // }

    fetchApplicationId = () => {
        fetch('http://localhost:3000/apps')
        .then(resp => resp.json())
        .then(data => {
            let app
                // tryCode - Block of code to try
                app = data.find(a => {
                    // debugger
                    return a.job_listing_id === this.props.a.id
                })
                // debugger
                if(app === undefined){
                //     catchCode - Block of code to handle errors
                    app = data.find(a => {
                        // debugger
                        return a.job_listing_id === this.props.a.job_listing.id
                    })
                    let aId = app.id
                    // debugger
                    this.setState({ id: aId})
                }else{
                    // debugger
          
                    let aId = app.id
                    this.setState({ id: aId})
                }

            // let app = data.find(a => {
            //     return a.job_listing_id === this.props.a.id
                // return a.job_listing_id === this.props.a.job_listing.id
            // })
                // debugger

        })
    }

    // fetchCompanyName = () => {
    //     debugger
    //     fetch('http://localhost:3000/companies')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         debugger
    //         let company
    //         // if(this.props.a.company_id === undefined){
    //             // debugger
    //             company = data.filter(c => c.id === this.props.a.company_id)
    //             return this.setState({ appCompanyName: company[0].name })
    //         // }else
    //         //     company = data.filter(c => c.id === this.props.a.company_id)
    //     })
    // }

    componentDidMount(){
        // debugger
        fetch('http://localhost:3000/companies')
        .then(resp => resp.json())
        .then(data => {
            // debugger
            let company
            // if(this.props.a.company_id === undefined){
                // debugger
                company = data.filter(c => c.id === this.props.a.company_id)
                return this.setState({ appCompanyName: company[0].name })
            // }else
            //     company = data.filter(c => c.id === this.props.a.company_id)
        })
    }

    render(){
        console.log("application props", this.props)
        this.props.a.status = "open"   
        return(
        <div className="grey-box">
        <Card.Group>
            <Card fluid className="application-box">
                <Card.Content>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</p> */}
                    {/* <h3>Position: {this.props.j.name}</h3> */}
                    <h3>Position: {this.props.a.name}</h3>
                    {/* <h3>Salary: {this.props.j.salary}</h3> */}
                    <h3>Salary: {this.props.a.salary}</h3>
                    {/* <h3>Status: {this.props.j.status}</h3> */}
                    <h3>Status: {this.props.a.status}</h3>
                    <h3>Company Name: {this.state.appCompanyName}</h3>
                    {/* <h3>Company Name: {this.state.appCompanyName}</h3> */}
                    <button onClick={() => this.props.deleteApplication(this.state.id, this.props.a.id)}>Delete your application</button>
                    {/* <button onClick={() => this.props.deleteApplication(this.state.id)}>Delete your application</button> */}
                </Card.Content>
            </Card>
        </Card.Group>
        <br />
        </div>
    )}
}

export default Application;

// export default Application;
              