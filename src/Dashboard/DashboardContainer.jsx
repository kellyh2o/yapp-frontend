import React from "react";
import { connect } from "react-redux";
import { LocationsActions } from '../Locations/Store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from './Dashboard';

const DashboardContainer = (props) => {

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
    <Dashboard />
    // <div style={{paddingLeft: "20px", width: "400px"}}>
    //   <Box>
    //     <Typography variant="h4">
    //       {generateLocationName()}
    //     </Typography>
    //   </Box>
    //   <List>
    //     {generateJumpList()}
    //   </List>
    // </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);