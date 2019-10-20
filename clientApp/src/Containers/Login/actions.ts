import { createStandardAction } from 'typesafe-actions'
import { ILoginData } from './types'

export const loginAction = createStandardAction('login')<ILoginData>()

export const logoutAction = createStandardAction('logout')()
