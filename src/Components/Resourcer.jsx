import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Resourcer extends React.Component {
  constructor() {
    super()
    this.state = {
      resourcerInfo: [],
      productInfo: []
    }
  }

  async componentDidMount() {
    await this.handleGetResoucerByID()
    await this.handleGetProductByID()

  }

  async handleGetResoucerByID() {
    const { resourcerInfo } = this.state
    try {
      let getResourcerInfo = await axios.get(`/resourcers/1`)
      let getResourcerInfoData = getResourcerInfo.data.payload
      this.setState({
        resourcerInfo: [...resourcerInfo, getResourcerInfoData]
      })

    } catch (err) {
      console.log('ERROR', err)
    }
  }

  async handleGetProductByID() {
    try {
      let getproductInfo = await axios.get(`/products/1`)
      let getproductInfoData = getproductInfo.data.payload
      this.setState({
        productInfo: getproductInfoData
      })

    } catch (err) {
      console.log('ERROR', err)
    }
  }


 

  render() {
    const { resourcerInfo, productInfo } = this.state
    console.log("productInfo", productInfo)
    console.log(this.props, "this.props")


    return (
      <div className='container'>
        <h1>Resourcer</h1>
        <div>
          {resourcerInfo.map(el => {
            return (
              <div>
                <h3>{el.company}'s Contact Info</h3>
                <img className='resourcerPic' src={el.avatar_url}></img>
                <p className='resourcerInfo'>Company Name: {el.company}</p>
                <p className='resourcerInfo'>About: {el.about}</p>
                <p className='resourcerInfo'>Phone Number: {el.phone_number}</p>
                <p className='resourcerInfo'>Email: {el.email}</p>
                <p className='resourcerInfo'>Website: {el.website_url}</p>
                <p className='resourcerInfo'>Address:{el.address}</p>
              </div>
            )
          })
          }

          <h3>Products</h3>
          <div className='productsContainer'>
            {productInfo.map(el => {
              return (
               <div>
                  <Link to= {`/material/${el.id}`}>
                  <div className='productCard'>
                    <img className='productPic' src={el.photo_url}></img>
                    <p className='productName'>{el.name}</p>
                    <p className='productBody'>{el.body}</p>
                  </div>
                </Link>
                 </div>

              )
            })}


          </div>
        </div>





      </div>
    )
  }
}

export default Resourcer



