import React from "react"

const ProfileApplications = (props) => {
    console.log(props.apps)
    // debugger
    return(
        <div>
            {/* <h1>{props.apps.job_listing.name}</h1> */}
            {/* {
                props.applications.map(app => {
                    if (app.user.id=== props.user.id){
                        return (
                            <div>
                                <h3>{app.job_listing.name}</h3>
                            </div>)
                    } else {
                        return null
                    }
                })
            } */}
        </div>
    )
}

export default ProfileApplications