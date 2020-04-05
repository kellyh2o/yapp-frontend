import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../Store/users-actions';

class UserProfile extends Component { 
    render() {
      this.props.getUsers();

      return (
        <div>
          User Profile
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => {
    dispatch(fetchUsers.request());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);