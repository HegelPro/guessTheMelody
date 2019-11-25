import {
  createAsyncAction,
  createStandardAction,
} from 'typesafe-actions'

import { IWord, IGame } from './types'


export const setWordAction = createStandardAction('setWord')<IWord>()

export const requestWordActions = createAsyncAction(
  'requestWord/req',
  'requestWord/suc',
  'requestWord/fail',
)<undefined, IWord, undefined>()

export const guessSongActions = createAsyncAction(
  'guessSong/req',
  'guessSong/suc',
  'guessSong/fail',
)<string, boolean, undefined>()

export const setGameAction = createStandardAction('setGame')<IGame>()

export const showLetterActions = createAsyncAction(
  'showLetter/req',
  'showLetter/suc',
  'showLetter/fail',
)<undefined, IWord, undefined>()