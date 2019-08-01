import { from, of } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
import socket from '../../socket'

import socketConfig from '../../config/socket.json'
import { ILobby } from './types';

const gameEvents = socketConfig.sockets.game.events

export const createLobbyEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.createLobby.request)),
      switchMap(() =>
        from(new Promise(res => {
          socket.emit(gameEvents.createLobby, res)
        }))
          .pipe(
            switchMap((lobby: any) => {
                // нет типизации
              return of(rootActions.lobby.setLobbyAction(lobby as ILobby))
            })
          )
      ),
    )

export const startGameEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobby.startGameAction.request)),
      switchMap(() =>
        from(new Promise(res => socket.emit('startGame', res)))
          .pipe(
            switchMap((gameDate: any) => {
              // нет типизации
              console.log(gameDate)
              return of(rootActions.lobby.startGameAction.success())
            })
          )
      ),
    )