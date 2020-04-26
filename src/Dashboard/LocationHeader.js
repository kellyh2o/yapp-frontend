import React from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const LocationHeader = (props) => {
  return (
    <React.Fragment>
      <Title>Location</Title>
      <Typography component="p" variant="h4" style={{paddingTop: "20px"}}>
      {props.demoLocation ? props.demoLocation.name : ""}
      </Typography>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
      demoLocation: state.demoLocation
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      selectView: (view) => {dispatch({type: 'SELECT_VIEW', view: view})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHeader);