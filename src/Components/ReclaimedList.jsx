import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
            return (
              <Link to={linkString} key={creator.id}>
                <div className='creatorItem'>
                  <p className='creatorName'>Creator: {creator.firstname} {creator.lastname}</p>
                  <p className='creatorPosts'>Posts: needs join in DB</p>
                  <p className='creatorMaterials'>Materials: needs join in DB</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ReclaimedList
