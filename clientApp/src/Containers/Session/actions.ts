import { createAsyncAction } from 'typesafe-actions'
import { IAccount } from '../Login/types'

export const getSessionFromCookiesAction = createAsyncAction(
  'getSessionFromCookies/req',
  'getSessionFromCookies/suc',
  'getSessionFromCookies/fail',
)<undefined, IAccount, undefined>()