import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
            let productsNameString = resourcer.productsname.join(', ')
            let materialsString = resourcer.materials.join(', ')
            let resourcerAvatarUrl = resourcer.avatar_url
            return (
              <Link to={linkString} key={resourcer.id}>
              <div className='resourcerItem'>
              <img className='resourcerPic' src={resourcerAvatarUrl} alt="Avatar Url"></img>
                <p className='resourcerName'>{resourcer.company}</p>
                <p className='resourcerProductName'>Products Name: {productsNameString}</p>
                <p className='resourcerMaterials'>Materials: {materialsString}</p>
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
