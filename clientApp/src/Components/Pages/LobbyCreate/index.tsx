import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import actions from '../../../store/actions'
import LayoutContent from '../../Layouts/LayoutContent'

import {
  ILobbyOptions
} from '../../../Containers/Lobby/types'


const LobbyCreate = () => {
  const dispatch = useDispatch()
  const [lobbyOptions, setLobbyOptions] = useState<ILobbyOptions>({})

  return (
    <LayoutContent>
      <TextField
        type='number'
        label='Max players'
        onChange={({ target: { value } }) => setLobbyOptions({ ...lobbyOptions, maxPlayers: +value })}
      />
      <TextField
        label='Password'
        onChange={({ target: { value } }) => setLobbyOptions({ ...lobbyOptions, password: value })}
      />
      <Button variant='contained' color='primary' onClick={() => dispatch(actions.lobby.createLobbyActions.request(lobbyOptions))}>Send</Button>
    </LayoutContent>
  )
}

export default LobbyCreate
