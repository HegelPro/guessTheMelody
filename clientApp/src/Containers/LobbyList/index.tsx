import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import { getLobbyListActions } from './actions'

const LobbyList = () => {
  const lobbyList = useSelector((state: RootState) => state.lobbyList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLobbyListActions.request())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {lobbyList.map(({ id }) => <div>{id}</div>)}
    </div>
  )
}

export default LobbyList
