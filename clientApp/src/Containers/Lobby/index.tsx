import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import LayoutContent from '../../Components/Layouts/LayoutContent'

import { startGameActions } from './actions'

const Lobby = () => {
  const lobby = useSelector((state: RootState) => state.lobby)
  const dispatch = useDispatch()
  return (
    <LayoutContent>
      <Typography>Id: {lobby.id}</Typography>
      <Typography>MaxPlayers: {lobby.maxPlayers}</Typography>
      <Typography>MinPlayers: {lobby.minPlayers}</Typography>
      <Typography>Players:</Typography>
      <Button onClick={() => dispatch(startGameActions.request())}>Start Game</Button>
    </LayoutContent>
  )
}

export default Lobby
