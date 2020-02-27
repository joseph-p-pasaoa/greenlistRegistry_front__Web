import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      id: false
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    });
  };

  submitForm = async event => {
    event.preventDefault();
    let { username, password, id } = this.state;
    let payload = { username, password };

    try {
      let creator = await axios.post(
        "http://localhost:11500/creators/",
        payload
      );
      this.setState({
        id: true
      });
      this.props.history.push("/main")
    } catch (error) {
      console.log(error);
    }

  }


     
  

  render() {
    const { username, password, id } = this.state;
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
          ></input>
          <input
            type="text"
            placeholder="password"
            onChange={this.handleInput}
            name="password"
            value={password}
          ></input>
        </form>
        <button onClick={this.submitForm} >Log In</button>
        <Link to="/register">
          <button onClick={this.handleSignUp}>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Welcome);
