import Lobby from '../Lobby'
import LobbyList from '../LobbyList'
import WaitRoom from '../WaitRoom'
import Home from '../../Components/Home'
import NotFound from '../../Components/NotFound'
import AccountEdit from '../AccountEdit'
import Login from '../Login'
import Registration from '../Registration'

import { IRouteData } from './types'

import SubRoute from './SubRoute'


const RouterConfig: IRouteData[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/lobby',
    component: Lobby,
  },
  {
    path: '/lobbyList',
    component: LobbyList,
  },
  {
    path: '/wait-room',
    component: WaitRoom,
  },
  {
    path: '/account/edit',
    component: AccountEdit,
  },
  {
    path: '/auth',
    component: SubRoute,
    routes: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/registration',
        component: Registration,
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
]

export default RouterConfig