/*
GROUP 4: ARANSA GARCIA, JOSEPH P. PASAOA, KATHY PUMA, AND SERGIO SALAMA
Client APP Main | Greenlist Registry (a full-stack sustainable material forum app)
*/


/* IMPORTS */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavigationBar from './Components/NavigationBar'
import Main from './Components/Main'
import RegisterForm from './Components/RegisterForm'
import Resourcer from './Components/Resourcer'
import Material from './Components/Material'
import Creator from './Components/Creator'
import ReclaimedForm from './Components/ReclaimedForm'
import Welcome from './Components/Welcome'


/* MAIN */
class App extends React.Component {
  state = {
    id: 1
  }

  renderMain = () => {
    return (
      <>
      <NavigationBar/>
      <Main loggedUser={this.state}/>
      </>
    )
  }

  renderResourcer = () => {
    return (
      <>
      <NavigationBar/>
      <Resourcer loggedUser={this.state}/>
      </>
    )
  }

  renderMaterial = () => {
    return (
      <>
      <NavigationBar/>
      <Material loggedUser={this.state}/>
      </>
    )
  }

  renderCreator = () => {
    return (
      <>
      <NavigationBar/>
      <Creator loggedUser={this.state}/>
      </>
    )
  }

  renderReclaimedForm = () => {
    return (
      <>
      <NavigationBar/>
      <ReclaimedForm loggedUser={this.state}/>
      </>
    )
  }

  render() {
    return (
      <div className='App'>
          <Switch>
            <Route path='/register' component={RegisterForm}/>
            <Route path='/main' render={this.renderMain}/>
            <Route path='/resourcer/:id' render={this.renderResourcer}/>
            <Route path='/material/:id' render={this.renderMaterial}/>
            <Route path='/creator/:id' render={this.renderCreator}/>
            <Route path='/addReclaimed' render={this.renderReclaimedForm}/>
            <Route path='/' component={Welcome}/>
          </Switch>
      </div>
    )
  }
}

export default App;
