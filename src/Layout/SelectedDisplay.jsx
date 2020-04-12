import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import UserProfile from "../Users/Components/UserProfile";
import Settings from "../Settings/Components/Settings";

import { JumpsActions } from '../Jumps/Store';
import { LocationsActions } from '../Locations/Store';


import { setupStore } from '../Jumps/Store/jumps-actions';



class SelectedDisplay extends Component {
    componentDidMount() {
        this.props.getLocations(this.props.token);
        this.props.setupStore(this.props.token);
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
    setupStore: (token) => {
        setupStore(dispatch, token);
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(SelectedDisplay);
