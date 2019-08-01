import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { startGameAction } from './actions'

const Lobby = () => {
  const lobby = useSelector((state: RootState) => state.lobby)
  const dispatch = useDispatch()
  return (
    <Box display='flex' flexDirection='column'>
      <Typography>Id: {lobby.id}</Typography>
      <Typography>MaxPlayers: {lobby.maxPlayers}</Typography>
      <Typography>MinPlayers: {lobby.minPlayers}</Typography>
      <Typography>Players:</Typography>
      <div>
        {lobby.players.map(({ id }) => <div>{id}</div>)}
      </div>
      <Button onClick={() => dispatch(startGameAction.request())}>Start</Button>
    </Box>
  )
}

export default Lobby
