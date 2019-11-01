import { of, empty } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
import { gameSocket } from '../../socket'
import history from '../Routers/history'
import {
  showLetterActions,
  guessSongActions,
} from './actions'


export const startGameRequestEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.startGameActions.request)),
      switchMap(action => {
        gameSocket.send(action)
        return empty()
      }),
    )

export const startGameSuccessEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.startGameActions.success)),
      switchMap(({ payload }) => {
        history.push('/game')
        return of(rootActions.game.setGameAction(payload))
      }),
    )

export const showLetterSuccessEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(showLetterActions.success)),
      switchMap(({ payload }) => {
        return of(rootActions.game.setWordAction(payload))
      }),
    )

export const guessSongRequestEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(guessSongActions.request)),
      switchMap(action => {
        gameSocket.send(action)
        return empty()
      }),
    )

export const guessSongSuccessEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(guessSongActions.success)),
      switchMap(({ payload }) => {
        if (payload) {
          history.push('/') // пока роутер на главную
        }
        return empty()
      }),
    )