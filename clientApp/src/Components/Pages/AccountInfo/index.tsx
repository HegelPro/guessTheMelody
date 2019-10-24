import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import history from '../../../Containers/Routers/history'
import LayoutContent from '../../Layouts/LayoutContent'

const AccountInfo = () => {
  const account = useSelector((state: RootState) => state.session.account)
  
  return account
  ? (
      <LayoutContent>
        <Typography variant='h3'>Account Info</Typography>
        <Typography>Name: {account.name}</Typography>
        <Typography>Email: {account.email}</Typography>
        <Button onClick={() => history.push('/account/edit')}>Edit Account</Button>
      </LayoutContent>
    )
  : <Typography>Account isn\'t init'</Typography>
}

export default AccountInfo
