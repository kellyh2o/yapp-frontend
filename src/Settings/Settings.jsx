import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UsersActions } from '../Users/Store';
import Title from '../Dashboard/Title';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({  
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
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
  const [showOldPassword, setShowOldPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState("");
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState("");

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmNewPassword = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };


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
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="password-input" style={{paddingRight: "5px", background: "white"}}>Old Password</InputLabel>
                <OutlinedInput
                    id="password-input"
                    type={showOldPassword ? 'text' : 'password'}
                    onChange={(event) => setOldPassword(event.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowOldPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {showOldPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                    style={{width: "300px"}}
                />
            </FormControl>    
            <br />               
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="new-password-input" style={{paddingRight: "5px", background: "white"}}>New Password</InputLabel>
                <OutlinedInput
                    id="new-password-input"
                    type={showNewPassword ? 'text' : 'password'}
                    onChange={(event) => setNewPassword(event.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {showNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                    style={{width: "300px"}}
                />
            </FormControl>      
            <br />               
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="confirm-new-password-input" style={{paddingRight: "5px", background: "white"}}>Confirm New Password</InputLabel>
                <OutlinedInput
                    id="confirm-new-password-input"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    onChange={(event) => setConfirmNewPassword(event.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmNewPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                    style={{width: "300px"}}
                />
            </FormControl>            
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
                  props.updateMe(props.token, props.firstName, props.lastName, props.email, props.username, newPassword, oldPassword);
                }}
                style={{width: "300px", marginTop: "10px", marginBottom: "10px", marginLeft: "8px"}}>
            Update Password
            </Button>
            { newPassword !== null && confirmNewPassword !== null && newPassword !== confirmNewPassword ? (
                <Box style={{paddingTop: "20px", width: "300px"}}>
                    <Typography color="error" align="center">
                      Please make sure both passwords match.
                    </Typography>
                </Box>
            ) : <div />
            }
            { props.updateMeFailure ? (
                <Box style={{paddingTop: "20px", width: "300px"}}>
                    <Typography color="error" align="center">
                      {props.updateMeErrorMessage}
                    </Typography>
                </Box>
            ) : <div />
            }
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
    updateMeErrorMessage: state.updateMeErrorMessage,
    updateMeFailure: state.updateMeErrorMessage !== null
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateMe: (token, firstName, lastName, email, username, password, oldPassword) => {
    dispatch(UsersActions.updateMe.request(
      {
        token, 
        user: { 
          firstName, 
          lastName, 
          email, 
          username,
          password,
          oldPassword
        }
      }
    ));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);