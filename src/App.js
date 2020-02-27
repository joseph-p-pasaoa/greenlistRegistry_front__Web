/*
GROUP 4: ARANSA GARCIA, JOSEPH P. PASAOA, KATHY PUMA, AND SERGIO SALAMA
Client APP Main | Greenlist Registry (a full-stack sustainable material forum app)
*/


/* IMPORTS */
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

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
    id: null,
    username: null,
    avatarUrl: null
  }
  initialState = {
    id: null,
    username: null,
    avatarUrl: null
  }

  resetUser = () => {
    this.setState(this.initialState);
    this.props.history.push("/");
  }

  setUser = (id, username, avatarUrl) => {
    this.setState({
      id, username, avatarUrl
    })
  }

  renderMain = () => {
    return (
      <>
        <NavigationBar loggedUser={this.state} resetUser={this.resetUser} />
        <Main loggedUser={this.state}  />
      </>
    )
  }

  renderResourcer = (routeProps) => {
    return (
      <>
        <NavigationBar loggedUser={this.state} resetUser={this.resetUser} />
        <Resourcer loggedUser={this.state} {...routeProps} />
      </>
    )
  }

  renderMaterial = (routeProps) => {
    return (
      <>
        <NavigationBar loggedUser={this.state} resetUser={this.resetUser} />
        <Material loggedUser={this.state} {...routeProps} />
      </>
    )
  }

  renderCreator = (routeProps) => {
    return (
      <>
        <NavigationBar loggedUser={this.state} resetUser={this.resetUser} />
        <Creator loggedUser={this.state} {...routeProps} />
      </>
    )
  }

  renderReclaimedForm = () => {
    return (
      <>
        <NavigationBar loggedUser={this.state} resetUser={this.resetUser} />
        <ReclaimedForm loggedUser={this.state} />
      </>
    )
  }

  renderWelcome = () => {
    return (
      <>
        <Welcome setUser={this.setUser} />
      </>
    )
  }


  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/register' component={RegisterForm} />
          <Route path='/main' render={this.renderMain} />
          <Route path='/resourcer/:id' render={this.renderResourcer} />
          <Route path='/material/:id' render={this.renderMaterial} />
          <Route path='/creator/:id' render={this.renderCreator} />
          <Route path='/addReclaimed' render={this.renderReclaimedForm} />
          <Route path='/' render={this.renderWelcome} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
