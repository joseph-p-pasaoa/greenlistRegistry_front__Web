import React from 'react'
import { Link } from 'react-router-dom'

const Creator = () => {
  return (
    <div className='container'>
      <h1>Creator</h1>
      <div className='creatorCard'>
        <h3>Percy's Contact Info</h3>
        <img className='creatorPic' src='https://upload.wikimedia.org/wikipedia/commons/3/38/Percy_Heath.jpg'></img>
        <p className='creatorInfo'>First Name: Percy</p>
        <p className='creatorInfo'>Last Name: Heath</p>
        <p className='creatorInfo'>About: Up and coming double-bass player</p>
        <p className='creatorInfo'>Phone Numbers: 333-222-1111</p>
        <p className='creatorInfo'>Email: percy@gmail.com</p>
        <p className='creatorInfo'>Website: percy.com</p>
        <p className='creatorInfo'>Address: United States</p>
      </div>
      <Link to='/addReclaimed'>
        <button>add Reclaim</button>
      </Link>
      <h3>Reclaimed</h3>
      <div className='reclaimedContainer'>
        <div className='reclaimedCard'>
          <img className='reclaimedPic' src='https://images.squarespace-cdn.com/content/v1/578aa530725e2593d407843b/1515443968756-MR2K8JOEEVNJC04COBZT/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/image-asset.png'></img>
          <p className='reclaimedName'>Leather scraps</p>
          <p className='reclaimedQuantity'>Qty: 5m2</p>
          <p className='reclaimedComposition'>Leather</p>
          <p className='reclaimedBody'>Selling 5 m2 of leather for $10</p>
        </div>
      </div>
    </div>
  )
}

export default Creator
