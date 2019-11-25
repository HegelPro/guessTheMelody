import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILobby } from '../Lobby/types'


interface JoinLobbyRequest {
  id: string
  password: string
}

export const getLobbyListActions = createAsyncAction(
  'getLobbyList/request',
  'getLobbyList/success',
  'getLobbyList/failure',
)<undefined, ILobby[], undefined>()

export const setLobbyListAction = createStandardAction('setLobbyList')<ILobby[]>()

export const joinLobbyActions = createAsyncAction(
  'joinLobby/request',
  'joinLobby/success',
  'joinLobby/failure',
)<JoinLobbyRequest, ILobby, undefined>()