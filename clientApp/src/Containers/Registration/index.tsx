import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import actions from '../../store/actions'

const Registration = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useDispatch()

  return (
    <Box display='flex' flexDirection='column'>
      <Input value={emailValue} onChange={({ target: { value } }) => setEmailValue(value)} />
      <Input value={passwordValue} onChange={({ target: { value } }) => setPasswordValue(value)} />
      <Button onClick={() => dispatch(actions.registration.createUserAction({
        email: emailValue,
        password: passwordValue,
      }))}>Submit</Button>
    </Box>
  )
}

export default Registration
