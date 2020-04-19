import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";

class RoutedDisplay extends Component {

    render() {
        if (this.props.isLoggedIn) {
            return <Dashboard />;
        } 
        else if (this.props.showLoginPage) {
            return <LoginPage />;
        }
        else {
            return <RegisterPage />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isNewRegistrationSuccess: state.isNewRegistrationSuccess,
        showLoginPage: state.showLoginPage
    };
}

export default connect(mapStateToProps)(RoutedDisplay);
