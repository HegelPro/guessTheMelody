import {
  createAsyncAction,
  createStandardAction,
} from 'typesafe-actions'

import { IWord, IGame } from './types'


export const setWordAction = createStandardAction('setWord')<IWord>()

export const requestWordActions = createAsyncAction(
  'requestWord/request',
  'requestWord/success',
  'requestWord/failure',
)<undefined, IWord, undefined>()

export const guessSongActions = createAsyncAction(
  'guessSong/request',
  'guessSong/success',
  'guessSong/failure',
)<string, boolean, undefined>()

export const setGameAction = createStandardAction('setGame')<IGame>()

export const showLetterActions = createAsyncAction(
  'showLetter/request',
  'showLetter/success',
  'showLetter/failure',
)<undefined, IWord, undefined>()