import React from 'react'
import NewList from './NewList'
import ReclaimedList from './ReclaimedList'

class Main extends React.Component {
  state = {
    list: 'new'
  }

  showNew = () => {
    this.setState({
      list: 'new'
    })
  }

  showReclaimed = () => {
    this.setState({
      list: 'reclaimed'
    })
  }

  render() {
    const { list } = this.state
    return (
      <div className='container'>
        <h1>Greenlist</h1>
        <br/>
        <input type='text' placeholder='search'></input>
        <br/>
        <button onClick={this.showNew}>NEW</button>
        <span> / </span>
        <button onClick={this.showReclaimed}>RECLAIMED</button>
        { (list === 'reclaimed') ? <ReclaimedList/> : <NewList/> }
      </div>
    )
  }
}

export default Main
