import { createStandardAction } from 'typesafe-actions'

export const setErrorAction = createStandardAction('setError')<Error>()