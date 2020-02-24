import React from 'react'
import { Link } from 'react-router-dom'

class ReclaimedForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className='container'>
        <h1>Reclaimed Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='title'></input>
          <input type='text' placeholder='composition'></input>
          <input type='text' placeholder='quantity'></input>
          <input type='text' placeholder='body'></input>
          <br/>
          <input type='file'></input>
          <br/>
          <br/>
          <Link to='/main'>
          <button>Post Reclaimed</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default ReclaimedForm
