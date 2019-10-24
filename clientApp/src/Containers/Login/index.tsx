import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import LayoutContent from '../../Components/Layouts/LayoutContent'

import actions from '../../store/actions'


const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useDispatch()

  return (
    <LayoutContent>
      <Typography variant='h3'>Login</Typography>
      <TextField
        label='Email'
        value={emailValue}
        onChange={({ target: { value } }) => setEmailValue(value)}
      />
      <TextField
        label='Password'
        value={passwordValue}
        onChange={({ target: { value } }) => setPasswordValue(value)}
      />
      <Button onClick={() => dispatch(actions.login.loginAction.request({
        email: emailValue,
        password: passwordValue,
      }))}>Submit</Button>
    </LayoutContent>
  )
}

export default Login
