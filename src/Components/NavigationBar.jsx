import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './NavigationBar.css'


class NavigationBar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      allMaterials: []
    }
  }

  async componentDidMount() {
    await this.handleGetMaterials()

  }
  async handleGetMaterials() {
    // const { allMaterials } = this.state
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
    // PRE-RETURN
    const { allMaterials } = this.state;

    let listDropdownItems = null;
    if (allMaterials.length > 0) {
      listDropdownItems = allMaterials.map(material => {
        return (
          <Dropdown.Item
            key={material.id}
            onClick={() => this.props.history.push(`/material/${parseInt(material.id)}`)}
          >
            {material.name}
          </Dropdown.Item>
        );
      });
    };
    

    return (
      <div className='container'>
        <div className='navigationBar'>
          <Link to='/main'>Main</Link>{' '}
          <Link to={`/creator/${this.props.loggedUser.id}`}>Profile</Link>{' '}
          <Link to='/addReclaimed'>Post reclaimed</Link>{' '}

          <DropdownButton id="dropdown-basic-button" title="Material">
            {listDropdownItems}
          </DropdownButton>
          <Link onClick={this.props.resetUser} to="/">Log out</Link>{' '}
        </div>



      </div>
    )
  }
}

export default withRouter(NavigationBar);
