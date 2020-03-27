import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component { 
    render() {
      return (
        <div>
          Settings
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Settings);