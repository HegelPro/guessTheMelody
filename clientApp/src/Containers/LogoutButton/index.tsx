import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import actions from '../../store/actions'


const LogoutButton = () => {
  const dispatch = useDispatch()
  return <Button onClick={() => dispatch(actions.login.logoutAction())}>Logout</Button>
}

export default LogoutButton