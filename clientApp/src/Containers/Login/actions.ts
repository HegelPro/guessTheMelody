import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILoginData, IAccount } from './types'

export const loginAction = createAsyncAction(
  'login/req',
  'login/suc',
  'login/fail',
)<ILoginData, IAccount, undefined>()

export const logoutAction = createStandardAction('logout')()
