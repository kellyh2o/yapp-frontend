import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component { 
    render() {
      this.props.sendPing();
      return (
        <div>
          Dashboard Component
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPing: () => dispatch({ type: 'PING'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);