import React from 'react'
import { Link } from 'react-router-dom'

class ReclaimedSearch extends React.Component {
  state = {
    creators: []
  }

  async componentDidMount() {
    this.setState({
      creators: this.props.searchResult
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
                  <p className='creatorPosts'>Matching Posts: {creator.count}</p>
                  <p className='creatorMaterials'>Materials: {materialsString}</p>
                </div>
              </Link>
            )
          })}
        </div>
        { (this.props.searchResult[0] === undefined) ? <p className='noResults'>no results</p> : <></> }
      </div>
    )
  }
}

export default ReclaimedSearch
