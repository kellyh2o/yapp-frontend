import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UsersActions } from '../Users/Store';
import Title from '../Dashboard/Title';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));


const Settings = (props) => { 

  const classes = useStyles();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");


  return (

    <Grid container spacing={3}>
      <Grid item style={{width: "100%"}}>
        <Paper className={classes.paper}>
          <div style={{width: "auto", margin: "auto"}}>
            <Title>
            Change Password
            </Title>
          </div>
          <form autoComplete="off" style={{paddingTop: "20px", paddingBottom: "20px", width: "auto", margin: "auto"}}>                        
            <TextField
              label="Old Password"
              variant="outlined"
              type="username"
              onChange={(event) => setOldPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />        
            <br />                   
            <TextField
              label="New Password"
              variant="outlined"
              type="username"
              onChange={(event) => setNewPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />            
            <br />             
            <TextField
              label="Confirm New Password"
              variant="outlined"
              type="username"
              onChange={(event) => setConfirmNewPassword(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />          
            <br />                     
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
            Update Password
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
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