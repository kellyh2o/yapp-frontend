import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MainDisplay from './Layout/MainDisplay';
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
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

