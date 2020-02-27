import React from 'react'
import NewList from './NewList'
import NewSearch from './NewSearch'
import ReclaimedList from './ReclaimedList'
import ReclaimedSearch from './ReclaimedSearch'
import axios from 'axios'

class Main extends React.Component {
  state = {
    list: 'new',
    input: '',
    searchResult: []
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSearch = async (event) => {
    event.preventDefault()
    const { list, input } = this.state
    let body = {
      input: input
    }
    let route = list.slice(0,3)
    let response = await axios.put(`/search/${route}`, body)
    this.setState({
      list: ''
    })
    this.setState({
      list: `${route}Search`,
      searchResult: response.data.payload
    })
  }

  showNew = () => {
    this.setState({
      list: 'new',
      input: ''
    })
  }

  showReclaimed = () => {
    this.setState({
      list: 'reclaimed',
      input: ''
    })
  }

  render() {
    const { list, input, searchResult } = this.state
    return (
      <div className='container'>
        <h1>Greenlist</h1>
        <br/>
        <form onSubmit={this.handleSearch} className='searchBar'>
          <input onChange={this.handleInput} type='text' placeholder='search by material' value={input}></input>
          <button>SEARCH</button>
        </form>
        <br/>
        <button onClick={this.showNew}>NEW</button>
        <span> / </span>
        <button onClick={this.showReclaimed}>RECLAIMED</button>
        { (list === 'reclaimed') ? <ReclaimedList/> : <></>}
        { (list === 'new') ? <NewList/> : <></>}
        { (list === 'recSearch') ? <ReclaimedSearch searchResult={searchResult}/> : <></>}
        { (list === 'newSearch') ? <NewSearch searchResult={searchResult}/> : <></>}
      </div>
    )
  }
}

export default Main
