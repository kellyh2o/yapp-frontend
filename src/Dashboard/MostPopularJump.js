import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
});

function getMostPopularJump(demoLocation) {
  if (demoLocation && demoLocation.jumps) {
    const jumps = demoLocation.jumps;
    const orderedJumps = jumps.sort((x, y) => {
      return y.events.length - x.events.length;
    });
  
    return orderedJumps[0].name;
  } else {
    return "- - -";
  }
}

function getPopularJumpNumberOfHits(demoLocation) {
  if (demoLocation && demoLocation.jumps) {
    const jumps = demoLocation.jumps;
    const orderedJumps = jumps.sort((x, y) => {
      return y.events.length - x.events.length;
    });
  
    return orderedJumps[0].events.length;
  } else {
    return "- - -";
  }
}


const MostPopularJump = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Today's Most Popular Jump</Title>
      <Typography component="p" variant="h4" style={{paddingTop: "20px"}}>
        {getMostPopularJump(props.demoLocation)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} style={{paddingTop: "20px", paddingLeft: "5px"}}>
        {getPopularJumpNumberOfHits(props.demoLocation)} Hits Today
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

export default connect(mapStateToProps, mapDispatchToProps)(MostPopularJump);