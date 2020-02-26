import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: " ",
      phone_number: "",
      about: "",
      website_url: "",
      address: ""
    };
  }

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  submitForm = async (event) => {
    event.preventDefault(); 
    
    let {username, firstname, lastname, email, password, phone_number, about, website_url, address} = this.state
    let payload = {
        username, 
        firstname, 
        lastname, 
        email, 
        password,
        phone_number, 
        about, 
        website_url, 
        address
    }
    
    try {
        let {data} = await axios.post('http://localhost:11500/creators/add', payload)
        console.log(data)
      
    } catch(error) {
        console.log(error)
    }
    
    
}

  render() {
    return (
      <div className="container">
        <h1>Register Form</h1>
        <br />
        <form onSubmit = {this.submitForm}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Phone Number"
            name="phone_number"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="About"
            name="about"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Website URL (optional)"
            name="website_url"
            onChange={this.handleInputs}
          ></input>

          <input
            type="text"
            placeholder="Address (optional)"
            name="address"
            onChange={this.handleInputs}
          ></input>

          {/* <Link to="/main"> */}
            <button onSubmit= {this.submitForm}>Sign Up</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
