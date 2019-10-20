import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import actions from '../../store/actions'

import { ICreateUserData } from './types'

const formData = new FormData()

const AccountEdit = () => {
  const [account, setAccount] = useState<ICreateUserData>({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const dispatch = useDispatch()

  return (
    <Box display='flex' flexDirection='column'>
      <TextField
        label='Name'
        value={account.name}
        onChange={({ target: { value } }) => setAccount({ ...account, name: value })}
      />
      <TextField
        label='Email'
        value={account.email}
        onChange={({ target: { value } }) => setAccount({ ...account, email: value })}
      />
      <TextField
        label='Password'
        value={account.password}
        onChange={({ target: { value } }) => setAccount({ ...account, password: value })}
      />
      <TextField
        label='Confirm password'
        value={account.confirm}
        onChange={({ target: { value } }) => setAccount({ ...account, confirm: value })}
      />
      <input
        type='file'
        ref={(el: HTMLInputElement) => {
          if (el && el.files) {
            formData.append('image', el.files[0])
          }
        }}
      />
      <Button
        onClick={() => {
          dispatch(actions.registration.createUserAction({ ...account, avatarFile: formData }))}
        }
      >Submit</Button>
    </Box>
  )
}

export default AccountEdit
