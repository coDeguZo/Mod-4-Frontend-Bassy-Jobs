import React from "react"

class CompanyProfile extends React.Component{
render(){
    console.log(this.props)
    return (
        <div>
            <h1>Company Profile Information</h1>
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