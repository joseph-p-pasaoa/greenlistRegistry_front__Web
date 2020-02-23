/*
GROUP 4: ARANSA GARCIA, JOSEPH P. PASAOA, KATHY PUMA, AND SERGIO SALAMA
Client APP Main | Greenlist Registry (a full-stack sustainable material forum app)
*/


/* IMPORTS */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Components/Main'
import RegisterForm from './Components/RegisterForm'
import Resourcer from './Components/Resourcer'
import Material from './Components/Material'
import Creator from './Components/Creator'
import ReclaimedForm from './Components/ReclaimedForm'
import Welcome from './Components/Welcome'
import './App.css';

/* MAIN */
class App extends React.Component {
  state = {
    id: 1
  }

  renderReclaimedForm = () => {
    return (
      <ReclaimedForm loggedUser={this.state}/>
    )
  }

  render() {
    return (
      <div className='App'>
          <Switch>
            <Route path='/register' component={RegisterForm}/>
            <Route path='/main' component={Main}/>
            <Route path='/resourcer/:id' component={Resourcer}/>
            <Route path='/material/:id' component={Material}/>
            <Route path='/creator/:id' component={Creator}/>
            <Route path='/addReclaimed' render={this.renderReclaimedForm}/>
            <Route path='/' component={Welcome}/>
          </Switch>
      </div>
    )
  }
}

export default App;
