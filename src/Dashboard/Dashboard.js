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
  useEffect(() => {

    if (props.demoLocation && props.jumps === null) {
      props.getJumps(props.token, props.demoLocation._id);
    }
 });

  function generateLocationName() {
    return props.demoLocation ? props.demoLocation.name : "";
  }

  function generateJumpList() {

    // if (props.demoLocation && props.jumps && props.noJump1Created) {
    //   props.createJump(props.token, props.demoLocation._id, demoJump1);
    // }

    // if (props.demoLocation && props.jumps && props.noJump2Created) {
    //   props.createJump(props.token, props.demoLocation._id, demoJump2);
    // }

    if (props.jumps) {
      return ( 
          props.jumps.map(element => {
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
    demoLocation: state.demoLocation,
    jumps: state.jumps,
    noJump1Created: state.noJump1Created,
    noJump2Created: state.noJump2Created
  };
}

const mapDispatchToProps = (dispatch) => ({
  getLocations: (token) => {
    dispatch(LocationsActions.fetchLocations.request(token));
  },
  createLocation: (token, locationName) => {
    dispatch(LocationsActions.createLocation.request({ token, locationName }));
  },
  getJumps: (token, locationId) => {
    dispatch(JumpsActions.fetchJumps.request({ token, locationId }));
  },
  createJump: (token, locationId, jumpName) => {
    dispatch(JumpsActions.createJump.request({ token, locationId, jumpName }));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);