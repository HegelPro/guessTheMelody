import { createStandardAction } from 'typesafe-actions'
import { ICreateUserData } from './types'

export const createUserAction = createStandardAction('createUser')<ICreateUserData>()
