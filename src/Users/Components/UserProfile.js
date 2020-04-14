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
    firstName: state.me.firstName,
    lastName: state.me.lastName,
    email: state.me.email,
    username: state.me.username,
    password: state.me.password,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => {
    dispatch(fetchUsers.request());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);