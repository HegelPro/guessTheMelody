import React from 'react'
import { Link } from 'react-router-dom'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import LogoutButton from '../../Containers/LogoutButton'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button>
            <Link to='/'>Home</Link>
          </Button>
          <Button>
            <Link to='/lobby'>Lobby</Link>
          </Button>
          <Button>
            <Link to='/lobbyList'>Lobbys</Link>
          </Button>
          <Button>
            <Link to='/wait-room'>Wait Room</Link>
          </Button>
          <Button>
            <Link to='/account/edit'>Edit Accout</Link>
          </Button>
          <Button>
            <Link to='/auth/login'>Login</Link>
          </Button>
          <Button>
            <Link to='/auth/registration'>Registration</Link>
          </Button>
          <LogoutButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
