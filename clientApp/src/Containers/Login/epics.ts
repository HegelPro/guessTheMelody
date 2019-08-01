import { empty, from, of } from 'rxjs'
import firebase from 'firebase'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, tap, catchError } from 'rxjs/operators'

import { Epic } from '../../store/types'
import rootActions from '../../store/actions'

const fbAuth = firebase.auth()

export const createLobbyEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(rootActions.login.loginAction)),
      switchMap(({ payload: { password, email } }) => {
        return from(fbAuth.signInWithEmailAndPassword(email, password))
          .pipe(
            tap(({ user } ) => {
              if(user) {
                document.cookie = `_uid=${user.uid}`
              }
            }),
            switchMap(() => empty()),
            catchError(e => of(rootActions.error.setErrorAction(e)))
          )
      })
    )