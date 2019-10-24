import { createStandardAction } from 'typesafe-actions'

import { ILetter, IGame } from './types'


export const setWordAction = createStandardAction('setWord')<ILetter[]>()

export const guessWordAction = createStandardAction('guessWord')()

export const setGameAction = createStandardAction('setGame')<IGame>()