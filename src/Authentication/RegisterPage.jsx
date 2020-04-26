import React, { useState } from "react";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthActions } from './Store';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
  }));
  

const RegisterPage = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");


    const classes = useStyles();

    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return(
        <div>
            <Container maxWidth="sm">
                <Grid 
                    container
                    justify="center"
                    style={{paddingTop: "30px"}}
                >
                    <Grid item>
                        <Box style={{padding: "20px", margin: "20px", border: "1px lightgrey solid", borderRadius: "5px"}}>
                            <Box style={{paddingTop: "10px", textAlign: "center"}}>
                                <Typography variant="h4">Bike Park Reporter</Typography>
                            </Box>
                            <form autoComplete="off" style={{padding: "20px", margin: "auto", width: "320px"}}>
                                <TextField
                                    id="firstname-input"
                                    label="First Name"
                                    type="username"
                                    variant="outlined"
                                    onChange={(event) => setFirstName(event.target.value)}
                                    style={{width: "300px", margin: "10px"}}
                                />
                                <TextField
                                    id="lastname-input"
                                    label="Last Name"
                                    type="username"
                                    variant="outlined"
                                    onChange={(event) => setLastName(event.target.value)}
                                    style={{width: "300px", margin: "10px"}}
                                />
                                <TextField
                                    id="email-input"
                                    label="Email"
                                    type="username"
                                    variant="outlined"
                                    onChange={(event) => setEmail(event.target.value)}
                                    style={{width: "300px", margin: "10px"}}
                                />
                                <TextField
                                    id="username-input"
                                    label="Username"
                                    type="username"
                                    variant="outlined"
                                    onChange={(event) => setUsername(event.target.value)}
                                    style={{width: "300px", margin: "10px"}}
                                />
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="password-input">Password</InputLabel>
                                    <OutlinedInput
                                        id="password-input"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(event) => setPassword(event.target.value)}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        labelWidth={70}
                                        style={{width: "300px", marginLeft: "2px", borderBottom: "none !important"}}
                                    />
                                </FormControl>
                                <br />
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    disabled={firstName === "" || lastName === "" || email === "" || username === "" || password === ""}
                                    onClick={() => {
                                        props.registerUser(firstName, lastName, email, username, password);
                                    }}
                                    style={{width: "300px", margin: "10px"}}>
                                Sign Up
                                </Button>
                                {props.registerFailure ? (
                                    <Box style={{paddingTop: "20px"}}>
                                        <Typography color="error" align="center">
                                            {props.registerErrorMessage}
                                        </Typography>
                                    </Box>
                                ) : <div />
                                }
                            </form>
                        </Box>
                        <Box style={{padding: "20px", margin: "20px", border: "1px lightgrey solid", borderRadius: "5px", textAlign: "center"}}>
                            <Typography>
                                Have an account? 
                                <Button 
                                    color="primary"
                                    onClick={() => props.viewLoginPage()}
                                >
                                    Log in
                                </Button>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        registerErrorMessage: state.registerErrorMessage,
        registerFailure: state.registerErrorMessage !== null
    };
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (firstName, lastName, email, username, password) => {
        dispatch(AuthActions.registerUser.request({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        }));
    },
    viewLoginPage: () => {
        dispatch({ type: AuthActions.viewLoginPage })
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
