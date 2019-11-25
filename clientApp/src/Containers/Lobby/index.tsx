import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import LayoutContent from '../../Components/Layouts/LayoutContent'

import { startGameActions } from './actions'
import PlayerList from '../../Components/Elements/PlayerList'

const Lobby = () => {
  const lobby = useSelector((state: RootState) => state.lobby)
  const dispatch = useDispatch()
  return (
    <LayoutContent>
      <Typography>Name: {lobby.name}</Typography>
      <Typography>Id: {lobby.id}</Typography>
      <Typography>MaxPlayers: {lobby.maxPlayers}</Typography>
      <Typography>MinPlayers: {lobby.minPlayers}</Typography>
      <Typography>Players: </Typography><PlayerList players={lobby.players}/>
      <Button onClick={() => dispatch(startGameActions.request())}>Start Game</Button>
    </LayoutContent>
  )
}

export default Lobby
