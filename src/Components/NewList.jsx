import React from 'react'
import { Link } from 'react-router-dom'

const NewList = () => {
  return (
    <div className='container'>
      <h2>New</h2>
      <div className='resourcersList'>
        <Link to='/resourcer/1'>
        <div className='resourcerItem'>
          <p className='resourcerName'>TELCEL CO.</p>
          <p className='resourcerMaterials'>Materials: Lyocell</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default NewList
