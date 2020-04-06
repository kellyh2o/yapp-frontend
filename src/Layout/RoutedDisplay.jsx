import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "../Authentication/LoginPage";
import MainDisplay from "../Layout/MainDisplay";

class RoutedDisplay extends Component {

    render() {
        if (this.props.isLoggedIn || this.props.isNewRegistrationSuccess) {
            return <MainDisplay />;
        } else {
            return <LoginPage />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isNewRegistrationSuccess: state.isNewRegistrationSuccess,
    };
}

export default connect(mapStateToProps)(RoutedDisplay);
