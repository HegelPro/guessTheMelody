import React, { useState } from 'react'

import { Dialog, DialogContent, DialogTitle, TextField, DialogActions, Button } from '@material-ui/core'


interface IProps {
  isOpen: boolean,
  onSubmit: (password: string) => void
}


const InputPasswordDialog = ({
  isOpen,
  onSubmit,
}: IProps) => {
  const [password, setPassword] = useState<string>('')
  return (
    <Dialog open={isOpen}>
        <DialogTitle>Input Password</DialogTitle>
        <DialogContent>
          <TextField
            label='Password'
            value={password}
            onChange={({target: {value}}) => setPassword(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onSubmit(password)}>
            Create Lobby
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default InputPasswordDialog
