import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Welcome extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      warning: false
    };
  }

  handleInput = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    let payload = { username, password };

    let response = null;
    try {
      response = await axios.post("http://localhost:11500/creators/auth", payload);
    } catch (error) {
      console.log(error);
    }

    if (response.data.status === "success") {
      const { id, username, avatar_url } = response.data.payload;
      this.setState({
        warning: false
      });
      this.props.setUser(id, username, avatar_url);
      this.props.history.push("/main");
    } else {
      this.setState({
        warning: true
      });
    }
  };

  render() {
    const { username, password, warning } = this.state;
    return (
      <div className="container">
        <h1>Welcome</h1>
        <br />
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={this.handleInput}
            name="username"
            value={username}
          />
          <input
            type="text"
            placeholder="password"
            onChange={this.handleInput}
            name="password"
            value={password}
          />
          <button onClick={this.submitForm}>Log In</button>
        </form>
        <Link to="/register">
          New user? Click here to sign up!
        </Link>
        <p className="warning">
          {warning === true ? "incorrect username or password" : ""}
        </p>
      </div>
    );
  }
}

export default withRouter(Welcome);
