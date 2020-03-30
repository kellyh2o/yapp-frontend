import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Components/Dashboard";
import UserProfile from "../Users/Components/UserProfile";
import Settings from "../Settings/Components/Settings";


class MainDisplay extends Component {

    render() {
        switch (this.props.selectedView) {
            case "Settings":
                return <Settings />;
            case "UserProfile":
                return <UserProfile />;
            case "Dashboard":
            default: 
                return <Dashboard />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedView: state.selectedView,
    };
}

export default connect(mapStateToProps)(MainDisplay);
