import React, { Component } from 'react';
import SensorsContainer from './js/containers/SensorsContainer';
import ForecastContainer from './js/containers/ForecastContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isLoggedIn: false,
    }

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onUserNameChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onLogin() {
    const {
      password,
      userName,
    } = this.state;

    if (password === 'admin' && userName === 'admin') {
      this.setState({ 
        isLoggedIn: true,
      });
    } else {
      this.setState({ 
        password: '',
        userName: '',
      }, () => alert('Bledne dane!'));
    }
  }

  render() {
    const {
      userName,
      password,
      isLoggedIn,
    } = this.state;

    return !isLoggedIn ? (
      <div>
        <input type="text" placeholder="User" value={userName} onChange={this.onUserNameChange}/>
        <input type="password" placeholder="Password" value={password} onChange={this.onPasswordChange}/>
        <button onClick={this.onLogin}>Login</button>
      </div>
    ) : (
      <div>
        <SensorsContainer />
        <ForecastContainer />
      </div>
    );
  }
};
export default App;
