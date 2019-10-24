import { createAsyncAction } from 'typesafe-actions'
import { IAccount } from '../Login/types'

export const getSessionFromCookiesAction = createAsyncAction(
  'getSessionFromCookies/request',
  'getSessionFromCookies/success',
  'getSessionFromCookies/failure',
)<undefined, IAccount, undefined>()