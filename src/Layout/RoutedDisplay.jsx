import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import MainDisplay from "../Layout/MainDisplay";

class RoutedDisplay extends Component {

    render() {
        if (this.props.isLoggedIn) {
            return <MainDisplay />;
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
        showLoginPage: state.showLoginPage
    };
}

export default connect(mapStateToProps)(RoutedDisplay);
