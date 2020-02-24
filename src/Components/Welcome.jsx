import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='container'>
      <h1>Welcome</h1>
      <br/>
      <input type='text' placeholder='username'></input>
      <input type='text' placeholder='password'></input>
      <button>Log In</button>
      <Link to='/register'>
      <button>Sign Up</button>
      </Link>
    </div>
  )
}

export default Welcome
