import React, { Component } from "react";
import { connect } from "react-redux";
import { JumpsActions } from '../../Jumps/Store';

class Dashboard extends Component { 
    render() {
      this.props.getJumps(this.props.token);
      return (
        <div>
          Dashboard Component
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
}

const mapDispatchToProps = (dispatch) => ({
  getJumps: (token) => {
    dispatch(JumpsActions.fetchJumps.request(token));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);