import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div className='container'>
      <h1>Register Form</h1>
      <br/>
      <form>
        <input type='text' placeholder='Username'></input>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='text' placeholder='Email'></input>
        <input type='text' placeholder='Password'></input>
        <input type='text' placeholder='Phone Number'></input>
        <input type='text' placeholder='About'></input>
        <input type='text' placeholder='Website URL (optional)'></input>
        <input type='text' placeholder='Address (optional)'></input>
        <Link to='/main'>
        <button>Sign Up</button>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
