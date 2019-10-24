import { empty, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, catchError } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'

export const getSessionFromCookiesEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.session.getSessionFromCookiesAction.request)),
      switchMap(() => {
        return ajax({
          url: 'http://localhost:5000/auth/session',
          method: 'Get',
          withCredentials: true,
        })
          .pipe(
            switchMap(({ response }) => of(rootActions.session.getSessionFromCookiesAction.success(response))),  // TODO any
            catchError(e => empty())
          )
      })
    )