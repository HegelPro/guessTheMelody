import { from, of, empty } from 'rxjs'
import { tap, catchError,  } from 'rxjs/operators'
import firebase from 'firebase'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import actions from '../../store/actions'

const fbAuth = firebase.auth()

export const createUserEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(actions.registration.createUserAction)),
      switchMap(({ payload: { password, email } }) =>
        from(fbAuth.createUserWithEmailAndPassword(email, password))
          .pipe(
            tap(({user}) => {
              if (user) {
                document.cookie = `_uid=${user.uid}`
              }
            }),
            switchMap(() => empty()),
            catchError(e => of(actions.error.setErrorAction(e))
          )
      ),
    ))