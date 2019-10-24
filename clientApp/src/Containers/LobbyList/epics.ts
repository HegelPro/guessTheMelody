import { of, empty } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
import socket from '../../socket'
import history from '../Routers/history'

export const getLobbyListRequestEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobbyList.getLobbyListActions.request)),
      switchMap(action => {
        socket.send(action)
        return empty()
      }),
    )

export const getLobbyListSuccesEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobbyList.getLobbyListActions.success)),
      switchMap(({ payload }) => {
        return of(rootActions.lobbyList.setLobbyListAction(payload))
      })
    )

export const joinLobbyRequestEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobbyList.joinLobbyActions.request)),
      switchMap(action => {
        socket.send(action)
        return empty()
      }),
    )

export const joinLobbySuccesEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobbyList.joinLobbyActions.success)),
      switchMap(({ payload }) => {
        history.push('/lobby/info')
        return of(rootActions.lobby.setLobbyAction(payload))
      })
    )