import React from 'react'
// import { useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import LayoutContent from '../../Components/Layouts/LayoutContent'

// import actions from '../../store/actions'


const formData = new FormData()

const AccountEdit = () => {
  return (
    <LayoutContent>
      <TextField
        label='Name'
      />
      <TextField
        label='Email'
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
          // dispatch(actions.registration.createUserAction({ ...account, avatarFile: formData }))
        }}
      >Submit</Button>
    </LayoutContent>
  )
}

export default AccountEdit
