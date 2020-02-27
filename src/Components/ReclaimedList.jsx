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
            let materialsString = creator.materials.join(', ')
            return (
              <Link to={linkString} key={creator.id}>
                <div className='creatorItem'>
                  <p className='creatorName'>Creator: {creator.firstname} {creator.lastname}</p>
                  <p className='creatorPosts'>Posts: {creator.count}</p>
                  <p className='creatorMaterials'>Materials: {materialsString}</p>
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
