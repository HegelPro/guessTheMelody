import { empty, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, catchError } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'

export const loginEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.login.loginAction.request)),
      switchMap(({ payload: { password, email } }) =>
        ajax({
          url: 'http://localhost:5000/auth/login',
          method: 'POST',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          })
        })
          .pipe(
            switchMap(({ response }) => of(rootActions.login.loginAction.success(response))),  // TODO any
            catchError(e => of(rootActions.error.setErrorAction(e)))
          )
      )
    )

export const logoutEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(rootActions.login.logoutAction)),
      switchMap(() =>
        ajax({
          url: 'http://localhost:5000/auth/logout',
          method: 'GET',
          withCredentials: true,
        })
          .pipe(
            switchMap(() => empty()),
            catchError(e => of(rootActions.error.setErrorAction(e)))
          )
      )
    )