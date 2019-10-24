import Lobby from '../Lobby'
import LobbyList from '../LobbyList'
import LobbyCreate from '../../Components/Pages/LobbyCreate'
import Home from '../../Components/Pages/Home'
import NotFound from '../../Components/Pages/NotFound'
import AccountEdit from '../AccountEdit'
import AccountInfo from '../../Components/Pages/AccountInfo'
import Login from '../Login'
import Registration from '../Registration'
import Game from '../Game'

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
    component: SubRoute,
    routes: [
      {
        path: '/lobby/info',
        component: Lobby,
      },
      {
        path: '/lobby/create',
        component: LobbyCreate,
      }
    ]
  },
  {
    path: '/lobbyList',
    component: LobbyList,
  },
  {
    path: '/account',
    component: SubRoute,
    routes: [
      {
        path: '/account/info',
        component: AccountInfo,
      },
      {
        path: '/account/edit',
        component: AccountEdit,
      },
    ]
  },
  {
    path: '/game',
    component: Game,
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