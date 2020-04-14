import React from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function UserProfile(props) { 

  return (
    <div>
      <Box>
        <Typography variant="h4">
          User Profile
        </Typography>
        <form autoComplete="off" style={{padding: "20px", margin: "auto", width: "77%"}}>               
            <TextField
              label="First Name"
              variant="outlined"
              type="username"
              defaultValue={props.firstName}
              style={{width: "300px", margin: "10px"}}
            />               
            <TextField
              label="Last Name"
              variant="outlined"
              type="username"
              defaultValue={props.lastName}
              style={{width: "300px", margin: "10px"}}
            />               
            <TextField
              label="Email"
              variant="outlined"
              type="username"
              defaultValue={props.email}
              style={{width: "300px", margin: "10px"}}
            />               
            <TextField
              label="Username"
              variant="outlined"
              type="username"
              defaultValue={props.username}
              style={{width: "300px", margin: "10px"}}
            />
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                    //props.login(username, password);
                }}
                style={{width: "300px", margin: "10px"}}>
            Update
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
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);