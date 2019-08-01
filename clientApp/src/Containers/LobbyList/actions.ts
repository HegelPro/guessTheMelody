import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILobby } from '../Lobby/types';

export const getLobbyListActions = createAsyncAction(
  'getLobbyList/request',
  'getLobbyList/succses',
  'getLobbyList/failure',
)<undefined, ILobby[], undefined>()

export const setLobbyListAction = createStandardAction('setLobbyList')<ILobby[]>()