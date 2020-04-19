import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UsersActions } from '../Store';
import Title from '../../Dashboard/Title';
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


const UserProfile = (props) => { 

  const classes = useStyles();

  const [firstName, setFirstName] = useState(props.firstName ? props.firstName : "");
  const [lastName, setLastName] = useState(props.lastName ? props.lastName : "");
  const [email, setEmail] = useState(props.email ? props.email : "");
  const [username, setUsername] = useState(props.username ? props.username : "");

  return (

    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={classes.paper}>
          <div style={{width: "auto", margin: "auto"}}>
            <Title>
              My Account
            </Title>
          </div>
          <form autoComplete="off" style={{paddingTop: "20px", paddingBottom: "20px", width: "auto", margin: "auto"}}>               
            <TextField
              label="First Name"
              variant="outlined"
              type="username"
              defaultValue={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />     
            <br />          
            <TextField
              label="Last Name"
              variant="outlined"
              type="username"
              defaultValue={lastName}
              onChange={(event) => setLastName(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />       
            <br />                  
            <TextField
              label="Email"
              variant="outlined"
              type="username"
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />          
            <br />               
            <TextField
              label="Username"
              variant="outlined"
              type="username"
              defaultValue={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{width: "300px", marginTop: "10px", marginBottom: "10px"}}
            />
            <br />          
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
              Update Account
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