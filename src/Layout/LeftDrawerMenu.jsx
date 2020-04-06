import React, { Component } from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class LeftDrawerMenu extends Component {

    render() {
        return (
            <List>
              <ListItem button key={'Dashboard'} selected={this.props.isDashboardSelected} onClick={() => { this.props.selectView("Dashboard") }}>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem>
                <ListItem button key={'User Profile'} selected={this.props.isUserProfileSelected} onClick={() => { this.props.selectView("UserProfile") }}>
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary={'User Profile'} />
                </ListItem>
                <ListItem button key={'Settings'} selected={this.props.isSettingsSelected} onClick={() => { this.props.selectView("Settings") }}>
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary={'Settings'} />
                </ListItem>
            </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawerMenu);
