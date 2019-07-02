import React from "react";
import { connect } from "react-redux";

import { login } from "../../store/actions";

class LoginForm extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds);
  };

  render() {
    return (
      <div className="login-form">
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.creds.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.creds.password}
            onChange={this.handleChanges}
          />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
