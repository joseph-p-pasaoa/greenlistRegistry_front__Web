import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./creator.css"


class Creator extends React.Component {
  constructor() {
    super()
    this.state = {
      creatorInfo: {},
      allReclaims: [],
    }
  }

  async componentDidMount() {
    await this.handleGetCreatorInfo()
    await this.handleGetReclaimedByID()
  }

  async handleGetCreatorInfo() {
    try {
      let getCreatorInfo = await axios.get(`/creators/${this.props.match.params.id}`)
      let getCreatorInfoData = getCreatorInfo.data.payload
      this.setState({
        creatorInfo: {
          about: getCreatorInfoData.about,
          address: getCreatorInfoData.address,
          avatar_url: getCreatorInfoData.avatar_url,
          email: getCreatorInfoData.email,
          firstname: getCreatorInfoData.firstname,
          lastname: getCreatorInfoData.lastname,
          phone_number: getCreatorInfoData.phone_number,
          username: getCreatorInfoData.username,
          website_url: getCreatorInfoData.website_url,
        }
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  async handleGetReclaimedByID() {
    let creatorId = this.props.match.params.id
    try {
      let getReclaimed = await axios.get(`/reclaims/sellReclaimed/${creatorId}/false`, { id: creatorId, is_need: false })
      let getReclaimedData = getReclaimed.data.payload
      this.setState({
        allReclaims: getReclaimedData
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }


  render() {
    const { creatorInfo, allReclaims } = this.state

    return (
      <div className='container-stage'>
        <h1>Creator</h1>
        <div className='creatorCard'>
          <h3>{creatorInfo.username}'s Contact Info</h3>
          <img className='creatorPic' src={creatorInfo.avatar_url} alt="user avatar"></img>
          <p className='creatorInfo'>First Name: {creatorInfo.firstname}</p>
          <p className='creatorInfo'>Last Name: {creatorInfo.lastname}</p>
          <p className='creatorInfo'>About: {creatorInfo.about}</p>
          <p className='creatorInfo'>Phone Numbers: {creatorInfo.phone_number}</p>
          <p className='creatorInfo'>Email: {creatorInfo.email}</p>
          <p className='creatorInfo'>Website: {creatorInfo.website_url}</p>
          <p className='creatorInfo'>Address: {creatorInfo.address}</p>
        </div>
        {this.props.loggedUser.id === parseInt(this.props.match.params.id) ? (
          <div>
            <Link to='/addReclaimed'>
              <button>add Reclaim</button>
            </Link>
          </div>
        ) : (
            <div>
            </div>
          )
        }

        <h3>Reclaimed Materials:</h3>
        <div className='reclaimedStage'>
          <div className='reclaimedContainer'>
            {allReclaims.map(reclaim => {
              return (
                <div className="reclaimedCard" >
                  <Carousel interval={null} wrap={false} >
                    {reclaim.photo_url.map(picture => {
                      return (
                        <Carousel.Item >
                          <div>
                            <img className='d-block w-100' src={picture} alt="reclaim view"></img>
                          </div>
                        </Carousel.Item>
                      )
                    })}
                  </Carousel>
                  <div className='reclaimedInfo'>
                    <p className='reclaimedName'>Name: {reclaim.name}</p>
                    <p className='reclaimedComposition'>Material(s): {reclaim.composition}</p>
                    <p className='reclaimedLabel'> Qty: {reclaim.quantity_num} {reclaim.quantity_label}</p>
                    <p className='reclaimedBody'>{reclaim.body}</p>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Creator
