import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component { 
    render() {
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

export default connect(mapStateToProps)(Dashboard);