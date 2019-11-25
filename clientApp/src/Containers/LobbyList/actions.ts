import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILobby } from '../Lobby/types'


interface JoinLobbyRequest {
  id: string
  password: string
}

export const getLobbyListActions = createAsyncAction(
  'getLobbyList/req',
  'getLobbyList/suc',
  'getLobbyList/fail',
)<undefined, ILobby[], undefined>()

export const setLobbyListAction = createStandardAction('setLobbyList')<ILobby[]>()

export const joinLobbyActions = createAsyncAction(
  'joinLobby/req',
  'joinLobby/suc',
  'joinLobby/fail',
)<JoinLobbyRequest, ILobby, undefined>()