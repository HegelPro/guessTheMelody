import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import actions from '../../store/actions'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useDispatch()

  return (
    <Box display='flex' flexDirection='column'>
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
      <Button onClick={() => dispatch(actions.login.loginAction({
        email: emailValue,
        password: passwordValue,
      }))}>Submit</Button>
    </Box>
  )
}

export default Login
