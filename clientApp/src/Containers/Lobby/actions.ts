import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILobby } from './types'

export const setLobbyAction = createStandardAction('setLobby')<ILobby>()

export const createLobby = createAsyncAction(
  'createLobby/request',
  'createLobby/success',
  'createLobby/failure',
)<undefined, undefined, undefined>()

export const startGameAction = createAsyncAction(
  'startGame/request',
  'startGame/success',
  'startGame/failure',
)<undefined, undefined, undefined>()