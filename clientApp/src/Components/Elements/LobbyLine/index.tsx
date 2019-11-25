import React from 'react'

import { ILobby } from '../../../Containers/Lobby/types'
import { Typography } from '@material-ui/core'

import { useStyles } from './styles'


interface IProp {
  lobby: ILobby
}

const LobbyLine = ({
  lobby
}: IProp) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Typography>{lobby.name}</Typography>
      <Typography>{lobby.players.length}/{lobby.maxPlayers}</Typography>
    </div>
  )
}

export default LobbyLine
