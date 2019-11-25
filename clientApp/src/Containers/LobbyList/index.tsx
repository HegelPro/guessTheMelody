import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import { getLobbyListActions, joinLobbyActions } from './actions'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

import LobbyLine from '../../Components/Elements/LobbyLine'
import LayoutContent from '../../Components/Layouts/LayoutContent'

import history from '../Routers/history'
import InputPasswordDialog from '../../Components/Elements/InputPasswordDialog'


const LobbyList = () => {
  const lobbyList = useSelector((state: RootState) => state.lobbyList)
  const dispatch = useDispatch()
  const [dialogState, setDialogState] = useState(false)

  useEffect(() => {
    dispatch(getLobbyListActions.request())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <LayoutContent>
      <List>
        {lobbyList.map(lobby => (
          <ListItem
            key={lobby.id}
            button
            onClick={() => {
              if(lobby.withPassword) {
                setDialogState(true)
              } else {
                dispatch(joinLobbyActions.request({
                  id: lobby.id,
                  password: '',
                }))
              }
            }
          }>
            <InputPasswordDialog isOpen={dialogState} onSubmit={(password) => {
              dispatch(joinLobbyActions.request({
                id: lobby.id,
                password,
              }))
            }} />
            <LobbyLine lobby={lobby} />
          </ListItem>
        ))}
      </List>
      <Button onClick={() => history.push('/lobby/create')}>Create Lobby</Button>
    </LayoutContent>
  )
}

export default LobbyList
