import React from 'react'
import { Link } from 'react-router-dom'

const Resourcer = () => {
  return (
    <div className='container'>
      <h1>Resourcer</h1>
      <div className='resourcerCard'>
        <h3>TENCEL's Contact Info</h3>
        <img className='resourcerPic' src='https://cdn3.volusion.com/evqre.ktvax/v/vspfiles/photos/ALTXLME-RFE3197-3.jpg?v-cache=1465366611'></img>
        <p className='resourcerInfo'>Company Name: Telcel Incorporated</p>
        <p className='resourcerInfo'>About: Lyocell Producer</p>
        <p className='resourcerInfo'>Phone Number: 111-222-3333</p>
        <p className='resourcerInfo'>Email: telcel@gmail.com</p>
        <p className='resourcerInfo'>Website: telcel.com</p>
        <p className='resourcerInfo'>Address: Switzerland</p>
      </div>
      <h3>Products</h3>
      <div className='productsContainer'>
        <Link to='/material/1'>
        <div className='productCard'>
          <img className='productPic' src='https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/c/h/chloe-blue-lyocell-chambray-skirt-287787-8d9fbab2cf9a6d5a34e387f923e03cb6c2949a23.jpg'></img>
          <p className='productName'>Lyocell</p>
          <p className='productBody'>This is good for the planet</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Resourcer
