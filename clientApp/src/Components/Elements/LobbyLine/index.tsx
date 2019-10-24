import React from 'react'

import { ILobby } from '../../../Containers/Lobby/types'
import { Typography, Box, Button } from '@material-ui/core'

import { joinLobbyActions } from '../../../Containers/LobbyList/actions'
import { useDispatch } from 'react-redux'


interface IProp {
  lobby: ILobby
}

const LobbyLine = ({
  lobby
}: IProp) => {
  const dispatch = useDispatch()
  return (
    <Box>
      <Typography>{lobby.id}</Typography>
      <Typography>{lobby.players.length}/{lobby.maxPlayers}</Typography>
      <Button onClick={() => dispatch(joinLobbyActions.request(lobby.id))}>Join lobby</Button>
    </Box>
  )
}

export default LobbyLine
