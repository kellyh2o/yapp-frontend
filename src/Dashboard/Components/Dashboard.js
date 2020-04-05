import React, { Component } from "react";
import { connect } from "react-redux";
import { JumpsActions } from '../../Jumps/Store';
import { fetchJumps } from '../../Jumps/Store/jumps-actions';
import { fetchUsers } from '../../Users/Store/users-actions';

class Dashboard extends Component { 
    render() {
      this.props.getJumps();
      this.props.getUsers();
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

const mapDispatchToProps = (dispatch) => ({
  getJumps: () => {
    dispatch(fetchJumps.request());
  },
  getUsers: () => {
    dispatch(fetchUsers.request());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);