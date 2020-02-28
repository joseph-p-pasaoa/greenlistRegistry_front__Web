import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './NewList.css'

class NewList extends React.Component {
  state = {
    resourcers: []
  }

  async componentDidMount() {
    let response = await axios.get('/resourcers')
    this.setState({
      resourcers: response.data.payload
    })
  }

  render() {
    const { resourcers } = this.state
    return (
      <div className='container'>
        <h2>Suppliers</h2>
        <div className='resourcersList'>
          {resourcers.map((resourcer) => {
            let linkString = `/resourcer/${resourcer.id}`
            let materialsString = resourcer.materials.join(', ')
            let resourcerAvatarUrl = resourcer.avatar_url
            return (
              <Link to={linkString} key={resourcer.id}>
              <div className='resourcerItem'>
              <img className='resourcerPicNL' src={resourcerAvatarUrl} alt="Avatar Url"></img>
                <p className='resourcerNameNL'>Company's Name: {resourcer.company}</p>
                <p className='resourcerMaterialsNL'>Materials: {materialsString}</p>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default NewList
