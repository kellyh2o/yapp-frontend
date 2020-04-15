import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { UsersActions } from '../Store';

const UserProfile = (props) => { 

  const [firstName, setFirstName] = useState(props.firstName ? props.firstName : "");
  const [lastName, setLastName] = useState(props.lastName ? props.lastName : "");
  const [email, setEmail] = useState(props.email ? props.email : "");
  const [username, setUsername] = useState(props.username ? props.username : "");


  return (
    <div style={{paddingLeft: "20px", width: "400px"}}>
      <Box>
        <Typography variant="h4">
          User Profile
        </Typography>
        <form autoComplete="off" style={{paddingTop: "20px", paddingBottom: "20px"}}>               
            <TextField
              label="First Name"
              variant="outlined"
              type="username"
              defaultValue={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <TextField
              label="Last Name"
              variant="outlined"
              type="username"
              defaultValue={lastName}
              onChange={(event) => setLastName(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <TextField
              label="Email"
              variant="outlined"
              type="username"
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <TextField
              label="Username"
              variant="outlined"
              type="username"
              defaultValue={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />
            <Button 
                variant="contained" 
                color="primary"
                disabled={
                  props.firstName === firstName &&
                  props.lastName === lastName && 
                  props.username === username &&
                  props.email === email  
                }
                onClick={() => {
                  props.updateMe(props.token, firstName, lastName, email, username);
                }}
                style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}>
            Save Changes
            </Button>

        </form>

      </Box>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    firstName: state.me ? state.me.firstName : null,
    lastName: state.me ? state.me.lastName : null,
    email: state.me ? state.me.email : null,
    username: state.me ? state.me.username : null,
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateMe: (token, firstName, lastName, email, username) => {
    dispatch(UsersActions.updateMe.request(
      {
        token, 
        user: { 
          firstName, 
          lastName, 
          email, 
          username 
        }
      }
    ));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);