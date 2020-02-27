import React from 'react'
import { Link } from 'react-router-dom'

class NewSearch extends React.Component {
  state = {
    resourcers: []
  }

  async componentDidMount() {
    this.setState({
      resourcers: this.props.searchResult
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
            let materialsString = resourcer.materials.join(', ')
            return (
              <Link to={linkString} key={resourcer.id}>
              <div className='resourcerItem'>
                <p className='resourcerName'>{resourcer.company}</p>
                <p className='resourcerMaterials'>Materials: {materialsString}</p>
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

export default NewSearch
