import { of, empty } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import {
  createLobbyActions,
  setLobbyAction,
} from './actions'
import { lobbySocket } from '../../socket'

import history from '../Routers/history'


export const createLobbyRequestEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(createLobbyActions.request)),
      switchMap(action => {
        lobbySocket.send(action)
        return empty()
      })
    )

export const createLobbySuccessEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(createLobbyActions.success)),
      switchMap(({payload}) => {
        history.push('/lobby/info')
        return of(setLobbyAction(payload))
      })
    )

export const createLobbyFailareEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(createLobbyActions.failure)),
      switchMap(() => {
        return empty()
      })
    )