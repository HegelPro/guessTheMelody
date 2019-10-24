import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import actions from '../../../store/actions'
import LayoutContent from '../../Layouts/LayoutContent'

interface IGameOptions {
  maxPlayers?: number
  passward?: string
}

const LobbyCreate = () => {
  const dispatch = useDispatch()
  const [gameOptions, setGameOptions] = useState<IGameOptions>({})

  return (
    <LayoutContent>
      <TextField
        type='number'
        label='Max players'
        onChange={({ target: { value } }) => setGameOptions({ ...gameOptions, maxPlayers: +value })}
      />
      <TextField
        label='Password'
        onChange={({ target: { value } }) => setGameOptions({ ...gameOptions, passward: value })}
      />
      <Button variant='contained' color='primary' onClick={() => dispatch(actions.lobby.createLobbyActions.request())}>Send</Button>
    </LayoutContent>
  )
}

export default LobbyCreate
