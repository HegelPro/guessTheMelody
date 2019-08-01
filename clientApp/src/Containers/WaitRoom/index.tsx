import React from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../store/actions'
import Button from '@material-ui/core/Button'


const WaitRoom = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button variant='contained' color='primary' onClick={() => dispatch(actions.lobby.createLobby.request())}>Send</Button>
    </div>
  )
}

export default WaitRoom
