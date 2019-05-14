import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SensorsContainer from './js/containers/SensorsContainer';
import ForecastContainer from './js/containers/ForecastContainer';
import MeasurementHistoryContainer from './js/containers/MeasurementHistoryContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      window.sessionStorage.getItem('isLoggedIn') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onUserNameChange({ target : { value: userName}}) {
    this.setState({ userName });
  }

  onPasswordChange({ target : { value: password}}) {
    this.setState({ password });
  }

  onLogin() {
    const {
      password,
      userName,
    } = this.state;

    if (password === 'admin' && userName === 'admin') {
      window.sessionStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      window.sessionStorage.setItem('isLoggedIn', false);
      alert('Bledne dane!')
    }
  }

  render() {
    const {
      userName,
      password,
    } = this.state;
    const isLoggedIn = window.sessionStorage.getItem('isLoggedIn');

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={() => !isLoggedIn ? (
            <div className="login-panel">
              <input
                type="text"
                placeholder="User"
                value={userName}
                onChange={this.onUserNameChange}
                autoComplete="off"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.onPasswordChange}
                autoComplete="off"
              />
              <button onClick={this.onLogin}>Login</button>
            </div>
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )} />
          <PrivateRoute path="/history/:id" component={MeasurementHistoryContainer} />
          <PrivateRoute path="/" component={() => (
            <div>
              <SensorsContainer />
              <ForecastContainer />
            </div>
          )}/>
          <Redirect from="*" to="/login" />
        </Switch>
      </BrowserRouter>
    )
  }
};
export default App;
