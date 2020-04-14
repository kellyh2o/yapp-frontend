import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { JumpsActions } from '../Jumps/Store';
import { LocationsActions } from '../Locations/Store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// For the first round of this application, the data
// is posted manually to the server upon app startup, 
// if it does not exist already.
const demoJump1 = "Wall Ride";
const demoJump2 = "Dropout";
const demoJump3 = "Barn Door";
const demoJump4 = "Steep Drop";
const demoJump5 = "Table Top";

function Dashboard (props) {

  function generateLocationName() {
    return props.demoLocation ? props.demoLocation.name : "";
  }

  function generateJumpList() {
    if (props.demoLocation && props.demoLocation.jumps) {
      return ( 
        props.demoLocation.jumps.map(element => {
            return (
              <ListItem key={element._id}>
                {element.name}
              </ListItem>
            );
          })
      );
    }
    else {
      return <div />;
    }
  }

  return (
    <div>
      <h3>{generateLocationName()}</h3>
      <List>
        {generateJumpList()}
      </List>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    locations: state.locations,
    demoLocation: state.demoLocation
  };
}

const mapDispatchToProps = (dispatch) => ({
  getLocations: (token) => {
    dispatch(LocationsActions.fetchLocations.request(token));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);