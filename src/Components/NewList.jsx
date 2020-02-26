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
        <h2>New</h2>
        <div className='resourcersList'>
          {resourcers.map((resourcer) => {
            let linkString = `/resourcer/${resourcer.id}`
            return (
              <Link to={linkString} key={resourcer.id}>
              <div className='resourcerItem'>
                <p className='resourcerName'>{resourcer.company}</p>
                <p className='resourcerMaterials'>Materials: needs join in DB</p>
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
