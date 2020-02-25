import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div class='navigationBar'>
      <Link to='/main'>Main</Link>{' '}
      <Link to='/creator/1'>Profile</Link>{' '}
      <Link to='/addReclaimed'>Post reclaimed</Link>{' '}
      <Link to='/material/1'>Material</Link>{' '}
      <Link to='/'>Log out</Link>{' '}
    </div>
  )
}

export default NavigationBar
