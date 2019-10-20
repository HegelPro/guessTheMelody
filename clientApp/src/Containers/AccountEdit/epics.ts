import { from, of, empty } from 'rxjs'
import { catchError,  } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import actions from '../../store/actions'

export const createUserEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(actions.registration.createUserAction)),
      switchMap(({
          payload: {
            name, email, password, confirm, avatarFile, // TODO avatar should use for send a file to the server
          }
        }) =>
        from(fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
              confirm,
            })
          })
        )
          .pipe(
            switchMap(() => empty()),
            catchError(e => of(actions.error.setErrorAction(e))
          )
      ),
    ))