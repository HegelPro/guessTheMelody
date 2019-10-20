import { empty, from, of } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, catchError } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'

export const loginEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.login.loginAction)),
      switchMap(({ payload: { password, email } }) => {
        return from(fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          credentials: 'include', // Don't forget to specify this if you need cookies
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          })
        }))
          .pipe(
            switchMap(() => empty()),
            catchError(e => of(rootActions.error.setErrorAction(e)))
          )
      })
    )

export const logoutEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.login.logoutAction)),
      switchMap(() => {
        return from(fetch('http://localhost:5000/auth/logout', {
          method: 'GET',
          credentials: 'include', // Don't forget to specify this if you need cookies
        }))
          .pipe(
            switchMap(() => empty()),
            catchError(e => of(rootActions.error.setErrorAction(e)))
          )
      })
    )