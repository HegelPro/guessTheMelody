import { from, of, empty } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'
// import socket from '../../socket'

export const createLobbyEpic: Epic = (action$) =>
  action$
    .pipe(
      // filter(isActionOf(),
      // switchMap(() =>
      //   from(new Promise(res => {
      //     // socket.emit('', res)
      //     res()
      //   }))
      //     .pipe(
      //       switchMap((lobby: any) => {
      //         return empty()
      //       })
      //     )
      // ),
    )