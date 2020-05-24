// import React, { Fragment } from 'react'
import React from 'react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

const bySalary = [
  { key: 1, text: 'All', value: 1 },
  { key: 2, text: '$0-$40000', value: 2 },
  { key: 3, text: '$40000-$80000', value: 3 },
  { key: 4, text: '$80000-$150000', value: 4 },
  { key: 5, text: '$150000+', value: 5 }
]

const byEducationLevel = [
    { key: 1, text: 'All', value: 1 },
    { key: 2, text: 'Highschool Diploma', value: 2 },
    { key: 3, text: "Bachelor's Degree", value: 3 },
    { key: 4, text: "Master's Degree", value: 4 },
    { key: 5, text: "Doctoral Degree", value: 5 }
]

const byExperienceLevel = [
    { key: 1, text: 'All', value: 1 },
    { key: 2, text: 'Junior', value: 2 },
    { key: 3, text: 'Mid', value: 3 },
    { key: 4, text: 'Senior', value: 4 }
]

const jobContainerDropdown = (props) => (
    <div className="align-right">
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <p>Sort by salary</p>
                    <Dropdown
                    clearable 
                    placeholder={"sort by salary"}
                    options={bySalary} selection 
                    onChange={(event) => props.sortJobListingBySalary(event)} />
                </Grid.Column>
                <Grid.Column>
                    <p>Sort by education level</p>
                    <Dropdown 
                    clearable
                    placeholder={"sort by education level"}
                    options={byEducationLevel} selection 
                    onChange={console.log("education")}/>
                    
                </Grid.Column>
                <Grid.Column>
                    <p>Sort by experience level</p>
                    <Dropdown 
                    clearable
                    placeholder={"sort by experience level"}
                    options={byExperienceLevel} selection 
                    onChange={(event) => props.sortJobListingsByExp(event)}/>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default jobContainerDropdown