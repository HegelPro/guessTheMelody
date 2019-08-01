import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const Navigation = () => {
  return (
    <Box>
      <Button>
        <Link to='/lobby'>Lobby</Link>
      </Button>
      <Button>
        <Link to='/lobbyList'>LobbyList</Link>
      </Button>
      <Button>
        <Link to='/'>Home</Link>
      </Button>
      <Button>
        <Link to='/wait-room'>WaitRoom</Link>
      </Button>
      <Button>
        <Link to='/login'>Login</Link>
      </Button>
      <Button>
        <Link to='/registration'>Registration</Link>
      </Button>
    </Box>
  )
}

export default Navigation
