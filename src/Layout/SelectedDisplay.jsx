import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import UserProfile from "../Users/Components/UserProfile";
import Settings from "../Settings/Settings";
import { LocationsActions } from '../Locations/Store';
import { setupDemoStore } from '../Redux/Store/setupDemoStore';
import { UsersActions } from '../Users/Store';


class SelectedDisplay extends Component {
    componentDidMount() {
        this.props.setupDemoStore(this.props.token);
        this.props.getLocations(this.props.token);
        this.props.fetchMe(this.props.token);
    }

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
        token: state.token,
    };
}

const mapDispatchToProps = (dispatch) => ({
    getLocations: (token) => {
      dispatch(LocationsActions.fetchLocations.request(token));
    },
    setupDemoStore: (token) => {
        setupDemoStore(dispatch, token);
    },
    fetchMe: (token) => {
        dispatch(UsersActions.fetchMe.request(token));
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(SelectedDisplay);
