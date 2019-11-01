import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getSessionFromCookiesAction } from './actions'


const Session = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSessionFromCookiesAction.request())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

export default Session
