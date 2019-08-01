import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Lobby from '../Lobby'
import LobbyList from '../LobbyList'
import WaitRoom from '../WaitRoom'
import Home from '../../Components/Home'
import NotFound from '../../Components/NotFound'
import Login from '../Login'
import Registration from '../Registration'


const Routers = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/lobby' component={Lobby} />
      <Route exact path='/lobbyList' component={LobbyList} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/registration' component={Registration} />
      <Route exact path='/wait-room' component={WaitRoom} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routers
