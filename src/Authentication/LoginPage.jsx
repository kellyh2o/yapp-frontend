import React, { useState } from "react";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthActions } from './Store';

const LoginPage = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
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
                                    id="email-input"
                                    label="Username"
                                    type="username"
                                    variant="outlined"
                                    onChange={(event) => setUsername(event.target.value)}
                                    style={{width: "300px", margin: "10px"}}
                                />
                                <TextField
                                    id="username-input"
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
                                        props.login(username, password);
                                    }}
                                    style={{width: "300px", margin: "10px"}}>
                                Log In
                                </Button>

                            </form>
                        </Box>
                        <Box style={{padding: "20px", margin: "20px", border: "1px lightgrey solid", borderRadius: "5px", textAlign: "center"}}>
                            <Typography>
                                Don't have an account? 
                                <Button
                                    color="primary"
                                    onClick={() => props.viewRegisterPage()}
                                >
                                    Sign Up
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
        isLoggedIn: state.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => {
        dispatch(AuthActions.loginUser.request({
            username, password
        }));
    },
    viewRegisterPage: () => {
        dispatch({ type: AuthActions.viewRegisterPage })
    },
    //selectView: (view) => {dispatch({type: 'SELECT_VIEW', view: view})}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
