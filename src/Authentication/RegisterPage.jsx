import React, { useState } from "react";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthActions } from './Store';
import RoutedDisplay from '../Layout/RoutedDisplay';

const RegisterPage = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (props.isNewRegistrationSuccess) {
        return (<RoutedDisplay />);
    }
    else {
        return(
            <div>
                <Container maxWidth="sm">
                    <Grid 
                        container
                        justify="center"
                    >
                        <Grid item>
                            <Box style={{padding: "20px", margin: "20px", border: "1px lightgrey solid", borderRadius: "5px"}}>
                                <Box style={{paddingTop: "10px", textAlign: "center"}}>
                                    <Typography variant="h4">Bike Park Reporter</Typography>
                                </Box>
                                <form autoComplete="off" style={{padding: "20px", margin: "auto", width: "77%"}}>
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
                                    <TextField
                                        id="password-input"
                                        label="Password"
                                        type="username"
                                        variant="outlined"
                                        onChange={(event) => setPassword(event.target.value)}
                                        style={{width: "300px", margin: "10px"}}
                                    />
                                    <br />
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        onClick={() => {
                                            props.registerUser(firstName, lastName, email, username, password);
                                        }}
                                        style={{width: "300px", margin: "10px"}}>
                                    Sign Up
                                    </Button>
    
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
}

const mapStateToProps = (state) => {
    return {
        isNewRegistrationSuccess: state.isNewRegistrationSuccess
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
