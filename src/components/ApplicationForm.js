//Child of job container
import React from "react"
import ApplicationFormContainer from "../containers/ApplicationFormContainer"
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Segment,
    Grid,
    Header,
    Image
  } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


  const ApplicationForm = (props) => {

    // function usePersistedState(key, defaultValue) {
    //   const [state, setState] = React.useState(
    //     () => JSON.parse(localStorage.getItem(key)) || defaultValue
    //   );
    //   useEffect(() => {
    //     localStorage.setItem(key, JSON.stringify(state));
    //   }, [key, state]);
    //   return [state, setState];
    // }
    // debugger
    // console.log("APP FORM", props)
    // componentDidMount = (props) => {
    //   debugger
    //   const selectedJobFetch = fetchJob(props.selectedJob.id) 
    //   if(getDBAnswer === true){
    //     console.log("wow")p
    //   }
    //   // const selectedJobFetch = props.selectedJob.id
    // }

    // function refreshPage() {
    //   window.location.reload(false);
    // }
    
    return (
        <div> 
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 900 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Application Form
            </Header>
      <Form >
         <Segment stacked>
           <Form.Field
            control={Input}
            label='Full Name'
            value={localStorage.name}
            placeholder='Full Name'
          />
       
           <Form.Field
            control={Input}
            value={localStorage.email}
            label='Email'
            placeholder='Email'
          />
    
            <Form.Field
            control={Input}
            value={localStorage.address}
            label='Address'
            placeholder='Address'
          />
      
        <Form.Field
          control={TextArea}
          label='Work Experience'
          placeholder='Tell us more about you...'
          className="textarea-application-form"
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
       <Link to="/profile"><Form.Field onClick={() => (props.handleSubmit())} control={Button}>Submit</Form.Field></Link> 
       </Segment>
        </Form>
        </Grid.Column>
      </Grid>
        </div>
    )
}

export default ApplicationForm;