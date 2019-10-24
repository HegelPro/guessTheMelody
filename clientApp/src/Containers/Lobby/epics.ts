import { of, empty } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
import socket from '../../socket'

import { ILobby } from './types'

import history from '../Routers/history'


export const createLobbyRequestEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.createLobbyActions.request)),
      switchMap(action => {
        socket.send(action)
        return empty()
      })
    )

export const createLobbySuccessEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.createLobbyActions.success)),
        switchMap((lobby: any) => {
        return of(rootActions.lobby.setLobbyAction(lobby as ILobby))
      })
    )

export const startGameRequestEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.startGameActions.request)),
      switchMap(action => {
        socket.send(action)
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