import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import RoutedDisplay from './Layout/RoutedDisplay';
import LoginPage from './Authentication/LoginPage';
import RegisterPage from './Authentication/RegisterPage';
import { history } from './Redux/history';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <RoutedDisplay />
    )
  }
}

