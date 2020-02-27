import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Resourcer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      resourcerInfo: {},
      productInfo: [],
    }
  }

  async componentDidMount() {
    await this.handleGetResoucerByID()
    await this.handleGetProductByID()

  }

  async handleGetResoucerByID() {
    let resourcerId = parseInt(this.props.match.params.id)
    try {
      let getResourcerInfo = await axios.get(`/resourcers/${resourcerId}`)
      let getResourcerInfoData = getResourcerInfo.data.payload
      this.setState({
        resourcerInfo: {
          about: getResourcerInfoData.about,
          address: getResourcerInfoData.address,
          avatar_url: getResourcerInfoData.avatar_url,
          company: getResourcerInfoData.company,
          email: getResourcerInfoData.email,
          phone_number: getResourcerInfoData.phone_number,
          website_url: getResourcerInfoData.website_url
        }
      })

    } catch (err) {
      console.log('ERROR', err)
    }
  }

  async handleGetProductByID() {
    let resourcerId = parseInt(this.props.match.params.id)

    try {
      let getproductInfo = await axios.get(`/products/${resourcerId}`)
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
    return (
      <div className='container'>
        <h1>Resourcer</h1>
     
                <h3>{resourcerInfo.company}'s Contact Info</h3>
                <img className='resourcerPic' src={resourcerInfo.avatar_url} alt="resourcer's avatar"></img>
                <p className='resourcerInfo'>Company Name: {resourcerInfo.company}</p>
                <p className='resourcerInfo'>About: {resourcerInfo.about}</p>
                <p className='resourcerInfo'>Phone Number: {resourcerInfo.phone_number}</p>
                <p className='resourcerInfo'>Email: {resourcerInfo.email}</p>
                <p className='resourcerInfo'>Website: {resourcerInfo.website_url}</p>
                <p className='resourcerInfo'>Address:{resourcerInfo.address}</p>
                
          <h3>New Materials</h3>
          <div className='productsContainer'>
            {productInfo.map(el => {
              return (
                <div>
                  <Link to={`/material/${el.id}`}>
                    <div className='productCard'>
                      <img className='productPic' src={el.photo_url} alt="material"></img>
                      <p className='productName'>{el.name}</p>
                      <p className='productBody'>{el.body}</p>
                    </div>
                  </Link>
                </div>

              )
            })}

          </div>
        </div>

    )
  }
}

export default Resourcer



