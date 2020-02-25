import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Creator extends React.Component {
  constructor() {
    super()
    this.state = {
      creatorInfo: [],
      allReclaims: [],
      photos: []
    }
  }


  async componentDidMount() {
    await this.handleGetCreatorInfo()
    await this.handleGetReclaimedByID()
    // await this.handleGetPhotoByID()
  }


  async handleGetCreatorInfo() {
    const { creatorInfo } = this.state
    try {
      let getCreatorInfo = await axios.get(`/creators/1`)
      let getCreatorInfoData = getCreatorInfo.data.payload
      this.setState({
        creatorInfo: [...creatorInfo, getCreatorInfoData]
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  async handleGetReclaimedByID() {
    const { allReclaims } = this.state
    try {
      let creatorId = 1
      let getReclaimed = await axios.get(`/reclaims/sellReclaimed/${creatorId}/false`, { id: creatorId, is_need: "false" })
      console.log(getReclaimed)
      let getReclaimedData = getReclaimed.data.payload
     

      this.setState({
        allReclaims: getReclaimedData
      })
    } catch (err) {
      console.log('ERROR', err) 
    }
  }





  render() {
    const { creatorInfo, allReclaims, photos } = this.state
    console.log("this.state", this.state)

    return (
      <div className='container'>
        <h1>Creator</h1>
        <div className='creatorCard'>
          {creatorInfo.map(el => {
            return (
              <div>
                <h3>{el.username}'s Contact Info</h3>
                <img className='creatorPic' src={el.avatar_url}></img>
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

        <Link to='/addReclaimed'>
          <button>add Reclaim</button>
        </Link>
        <h3>Sustainable materials </h3>
        <div className='reclaimedContainer'>
          <div className='reclaimedCard'>
            {allReclaims.map(reclaim => {
              return (
                <div>
              
                  <p className='reclaimedName'>name: {reclaim.name}</p>
                  <p className='reclaimedlabel;'>{reclaim.quantity_label}</p>
                  <p className='reclaimedBody'>{reclaim.body}</p>
                  <p className='reclaimedQuantity'>Qty: {reclaim.quantity_num}</p>
                  <p className='reclaimedComposition'>{reclaim.composition}</p>

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
