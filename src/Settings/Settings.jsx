import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { UsersActions } from '../Users/Store';

const Settings = (props) => { 

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");


  return (
    <div style={{paddingLeft: "20px", width: "400px"}}>
      <Box>
        <Typography variant="h4">
          Settings
        </Typography>
        <Typography variant="subtitle1">
          Change Password
        </Typography>
        <form autoComplete="off" style={{paddingTop: "20px", paddingBottom: "20px"}}>               
            <TextField
              label="Old Password"
              variant="outlined"
              type="username"
              onChange={(event) => setOldPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <TextField
              label="New Password"
              variant="outlined"
              type="username"
              onChange={(event) => setNewPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <TextField
              label="Confirm New Password"
              variant="outlined"
              type="username"
              onChange={(event) => setConfirmNewPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />               
            <Button 
                variant="contained" 
                color="primary"
                disabled={
                  oldPassword === "" ||
                  newPassword === "" ||
                  confirmNewPassword === ""
                }
                onClick={() => {
                  props.updateMe(props.token, props.firstName, props.lastName, props.email, props.username, newPassword);
                }}
                style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}>
            Update Profile
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
  updateMe: (token, firstName, lastName, email, username, password) => {
    dispatch(UsersActions.updateMe.request(
      {
        token, 
        user: { 
          firstName, 
          lastName, 
          email, 
          username,
          password
        }
      }
    ));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);