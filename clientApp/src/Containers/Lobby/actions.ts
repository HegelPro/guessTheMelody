import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILobby } from './types'
import { IGame } from '../Game/types'

export const setLobbyAction = createStandardAction('setLobby')<ILobby>()

export const createLobbyActions = createAsyncAction(
  'createLobby/request',
  'createLobby/success',
  'createLobby/failure',
)<undefined, undefined, undefined>()

export const startGameActions = createAsyncAction(
  'startGame/request',
  'startGame/success',
  'startGame/failure',
)<undefined, IGame, undefined>()