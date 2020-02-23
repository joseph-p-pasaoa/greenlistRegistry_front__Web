import React from 'react'
import { Link } from 'react-router-dom'

const ReclaimedList = () => {
  return (
    <div className='container'>
      <h2>Reclaimed</h2>
      <div className='creatorsList'>
        <Link to='/creator/1'>
        <div className='creatorItem'>
          <p className='creatorName'>Creator: Percy</p>
          <p className='creatorPosts'>1 post</p>
          <p className='creatorMaterials'>Materials: Leather</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default ReclaimedList
