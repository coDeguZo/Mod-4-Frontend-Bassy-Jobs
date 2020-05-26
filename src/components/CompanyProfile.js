import React from "react"

class CompanyProfile extends React.Component{
render(){
    console.log(this.props)
    return (
        <div>
            <h1>Profile Information</h1>
            <div className="profile-text-info">
                <h3>Name: {this.props.company.name}</h3>
                <h3>Email: {this.props.company.email}</h3>
                <button onClick={this.props.edit}> Edit Information </button>
            </div>
        </div>
    )
}
}

export default CompanyProfile
{/* <div>
<h1>Profile Information</h1>
<div className="profile-text-info">
    <h3>Name: {props.user.name}</h3>
    <h3>Address: {props.user.address}</h3>
    <h3>Phone: {props.user.phone_number}</h3>
    <h3>Email: {props.user.email}</h3>
    <button onClick={props.edit}> Edit Information </button>
</div>
</div> */}