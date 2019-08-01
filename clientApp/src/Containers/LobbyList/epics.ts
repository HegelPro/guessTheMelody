import { from, of } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
import socket from '../../socket'

const socketGetLobbyListEvent = 'getLobbyList'

export const createLobbyEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.lobbyList.getLobbyListActions.request)),
      switchMap(() =>
        from(new Promise(res => {
          socket.emit(socketGetLobbyListEvent, res)
        }))
          .pipe(
            switchMap((lobbyList: any) => {
              // console.log(lobbyList)
              return of(rootActions.lobbyList.setLobbyListAction(lobbyList))
            })
          )
      ),
    )