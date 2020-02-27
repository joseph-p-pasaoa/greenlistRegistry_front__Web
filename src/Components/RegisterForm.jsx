import React from "react";
import axios from 'axios'

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone_number: "",
      about: "",
      website_url: "",
      address: "",
      avatarFile: null
    };
  }

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFileInput = (e) => {
    this.setState({
        avatarFile: e.target.files[0]
    });
  }

  submitForm = async (event) => {
    event.preventDefault(); 
    
    let {username, firstname, lastname, email, password, phone_number, about, website_url, address, avatarFile} = this.state
    const creatorPost = new FormData();

    creatorPost.append("username", username);
    creatorPost.append("firstname", firstname);
    creatorPost.append("lastname", lastname);
    creatorPost.append("password", password);
    creatorPost.append("email", email);
    creatorPost.append("about", about);
    creatorPost.append("phone_number", phone_number);
    creatorPost.append("website_url", website_url);
    creatorPost.append("address", address);
    creatorPost.append("avatarFile", avatarFile);

    try {
        await axios.post('http://localhost:11500/creators/add', creatorPost);
    } catch(error) {
        console.log(error)
    }  
  }

  render() {
    return (
      <div className="container">
        <h1>Register Form</h1>
        <br />
        <form onSubmit={this.submitForm} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone_number"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="About"
            name="about"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Website URL (optional)"
            name="website_url"
            onChange={this.handleInputs}
          />

          <input
            type="text"
            placeholder="Address (optional)"
            name="address"
            onChange={this.handleInputs}
          />

          {/* file input */}
          <input
            type="file"
            accept="image/*"
            onInput={this.handleFileInput}
            onChange={e => e.target.value}
          />

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
