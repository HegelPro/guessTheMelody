import { createStandardAction } from 'typesafe-actions'

import { ILetter } from './types'


export const getRandomSong = createStandardAction('getRandomSong')()

export const setWord = createStandardAction('setWord')<ILetter[]>()

export const guessWord = createStandardAction('guessWord')()