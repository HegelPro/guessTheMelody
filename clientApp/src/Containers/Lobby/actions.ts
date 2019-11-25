import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import {
  ILobby,
  ILobbyOptions,
} from './types'
import { IGame } from '../Game/types'

export const setLobbyAction = createStandardAction('setLobby')<ILobby>()

export const createLobbyActions = createAsyncAction(
  'createLobby/req',
  'createLobby/suc',
  'createLobby/fail',
)<ILobbyOptions, ILobby, undefined>()

export const startGameActions = createAsyncAction(
  'startGame/req',
  'startGame/suc',
  'startGame/fail',
)<undefined, IGame, undefined>()