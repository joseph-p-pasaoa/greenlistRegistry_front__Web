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
      creatorInfo: [],
      allReclaims: [],
    }
  }

  async componentDidMount() {
    await this.handleGetCreatorInfo()
    await this.handleGetReclaimedByID()
  }

  async handleGetCreatorInfo() {
    const { creatorInfo } = this.state
    try {
      let getCreatorInfo = await axios.get(`/creators/${this.props.match.params.id}`)
      let getCreatorInfoData = getCreatorInfo.data.payload
      this.setState({
        creatorInfo: [...creatorInfo, getCreatorInfoData]
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  async handleGetReclaimedByID() {
    // const { allReclaims } = this.state
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
      <div className='container'>
        <h1>Creator</h1>
        <div className='creatorCard'>
          {creatorInfo.map(el => {
            return (
              <div>
                <h3>{el.username}'s Contact Info</h3>
                <img className='creatorPic' src={el.avatar_url} alt="user avatar"></img>
                <p className='creatorInfo'>First Name: {el.firstname}</p>
                <p className='creatorInfo'>Last Name: {el.lastname}</p>
                <p className='creatorInfo'>About: {el.about}</p>
                <p className='creatorInfo'>Phone Numbers: {el.phone_number}</p>
                <p className='creatorInfo'>Email: {el.email}</p>
                <p className='creatorInfo'>Website: {el.website_url}</p>
                <p className='creatorInfo'>Address: {el.address}</p>
              </div>
            )
          })}
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

        <h3>Sustainable materials </h3>
        <div className='reclaimedContainer'>
          <div className='reclaimedCard'>
            {allReclaims.map(reclaim => {
              return (
                <div  >
                  <Carousel interval='1000000' >
                    {reclaim.photo_url.map(picture => {
                      return (
                        <Carousel.Item >
                          <div>
                            <img className='d-block w-100 reclaimedPic' src={picture} alt="reclaim view"></img>
                          </div>
                        </Carousel.Item>
                      )
                    })}
                  </Carousel>
                  <div className='creatorInfo'>
                    <p className='creatorName'>Name: {reclaim.name}</p>
                    <p className='creatorLabel'> Qty: {reclaim.quantity_num} {reclaim.quantity_label}</p>
                    <p className='creatorBody'>{reclaim.body}</p>
                    <p className='creatorComposition'>Material(s): {reclaim.composition}</p>
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
