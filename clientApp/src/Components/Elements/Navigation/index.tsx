import React from 'react'
import { Link } from 'react-router-dom'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import LogoutButton from '../LogoutButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);


const Navigation = () => {
  const classes = useStyles()
  const { isAuth } = useSelector((state: RootState) => state.session)

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button>
            <Link to='/'>Home</Link>
          </Button>
          { isAuth ?
            (
              <React.Fragment>
                <Button>
                  <Link to='/lobbyList'>Lobbys</Link>
                </Button>
                <Button>
                  <Link to='/account/info'>Accout</Link>
                </Button>
                <LogoutButton />
              </React.Fragment>
            )
          : (
              <React.Fragment>
                <Button>
                  <Link to='/auth/login'>Login</Link>
                </Button>
                <Button>
                  <Link to='/auth/registration'>Registration</Link>
                </Button>
              </React.Fragment>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
