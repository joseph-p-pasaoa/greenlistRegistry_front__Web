/*
GROUP 4: ARANSA GARCIA, JOSEPH P. PASAOA, KATHY PUMA, AND SERGIO SALAMA
Client APP Main | Greenlist Registry (a full-stack sustainable material forum app)
*/


/* IMPORTS */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Components/Main'
import NewList from './Components/NewList'
import ReclaimList from './Components/ReclaimList'
import RegisterForm from './Components/RegisterForm'
import User from './Components/User'
import ReclaimForm from './Components/ReclaimForm'
import Welcome from './Components/Welcome'
import './App.css';

/* MAIN */
class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <Switch>
            <Route path='/main' component={Main}/>
            <Route path='/main/new' component={NewList}/>
            <Route path='/main/reclaim' component={ReclaimList}/>
            <Route path='/register' component={RegisterForm}/>
            <Route path='/users/:id' component={User}/>
            <Route path='/users/reclaim' component={ReclaimForm}/>
            <Route path='/' component={Welcome}/>
          </Switch>
      </div>
    )
  }
}

export default App;
