import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ReclaimedList.css'

class ReclaimedList extends React.Component {
  state = {
    creators: []
  }

  async componentDidMount() {
    let response = await axios.get('/creators')
    this.setState({
      creators: response.data.payload
    })
  }

  render() {
    const { creators } = this.state
    return (
      <div className='container'>
        <h2>Reclaimed</h2>
        <div className='creatorsList'>
          {creators.map((creator) => {

            let linkString = `/creator/${creator.id}`
            let creatorAvatarUrl = creator.avatar_url
            let materialsString = creator.materials.join(', ')




            return (
              <div>
                {parseInt(creator.count) !== 0 ? (
                  <Link to={linkString} key={creator.id}>

                    <div className='creatorItemRL'>
                      <img className='creatorPicRL' src={creatorAvatarUrl} alt="Avatar Url"></img>
                      <p className='creatorNameRL'>Creator: {creator.firstname} {creator.lastname}</p>
                      <p className='creatorPostsRL'>Posts: {creator.count}</p>
                      <p className='creatorMaterialsRL'>Materials: {materialsString}</p>
                    </div>
                  </Link>
                ) : (<div></div>)}
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default ReclaimedList
