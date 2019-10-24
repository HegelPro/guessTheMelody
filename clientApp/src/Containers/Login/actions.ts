import { createStandardAction, createAsyncAction } from 'typesafe-actions'
import { ILoginData, IAccount } from './types'

export const loginAction = createAsyncAction(
  'login/request',
  'login/success',
  'login/failure',
)<ILoginData, IAccount, undefined>()

export const logoutAction = createStandardAction('logout')()
