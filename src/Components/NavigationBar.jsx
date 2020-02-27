import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavigationBar.css'


class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      allMaterials: []
    }
  }

  async componentDidMount() {
    await this.handleGetMaterials()

  }
  async handleGetMaterials() {
    const { allMaterials } = this.state
    try {
      let getMaterialInfo = await axios.get(`/materials`)
      let getMaterialInfoData = getMaterialInfo.data.payload
      this.setState({
        allMaterials: getMaterialInfoData
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }
  render() {
    const { allMaterials } = this.state
    return (
      <div className='container'>
        <div className='navigationBar'>
          <Link to='/main'>Main</Link>{' '}
          <Link to={`/creator/${this.props.loggedUser.id}`}>Profile</Link>{' '}
          <Link to='/addReclaimed'>Post reclaimed</Link>{' '}
          <NavDropdown id="nav-dropdown" title="Material">
            {allMaterials.map(material => {
              return (
                <Link to={`/material/${parseInt(material.id)}`} key={material.id}>
                  <p className='dropdownItem'>{material.name}</p>
                </Link>
              )
            })}
          </NavDropdown>
          <Link to='/'>Log out</Link>{' '}
        </div>



      </div>
    )
  }
}

export default NavigationBar
