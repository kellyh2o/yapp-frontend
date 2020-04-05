import React, { Component } from "react";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {

    render() {
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
                                    <Typography variant="h4">Bike Park System</Typography>
                                </Box>
                                <form style={{padding: "20px", margin: "auto", width: "77%"}}>
                                    <TextField
                                        id="email-input"
                                        label="Email"
                                        type="username"
                                        variant="outlined"
                                        style={{width: "300px", margin: "10px"}}
                                    />
                                    <TextField
                                        id="firstname-input"
                                        label="First Name"
                                        type="username"
                                        variant="outlined"
                                        style={{width: "300px", margin: "10px"}}
                                    />
                                    <TextField
                                        id="lastname-input"
                                        label="Last Name"
                                        type="username"
                                        variant="outlined"
                                        style={{width: "300px", margin: "10px"}}
                                    />
                                    <TextField
                                        id="password-input"
                                        label="Password"
                                        type="username"
                                        variant="outlined"
                                        style={{width: "300px", margin: "10px"}}
                                    />
                                    <br />
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        style={{width: "300px", margin: "10px"}}>
                                    Sign Up
                                    </Button>

                                </form>
                            </Box>
                            <Box style={{padding: "20px", margin: "20px", border: "1px lightgrey solid", borderRadius: "5px", textAlign: "center"}}>
                                <Typography>
                                    Have an account? 
                                    <Button 
                                        href="/login"
                                        color="primary"
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
        isDashboardSelected: state.selectedView === "Dashboard",
        isUserProfileSelected: state.selectedView === "UserProfile",
        isSettingsSelected: state.selectedView === "Settings",
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectView: (view) => {dispatch({type: 'SELECT_VIEW', view: view})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
