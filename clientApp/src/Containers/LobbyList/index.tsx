import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/types'
import { getLobbyListActions } from './actions'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

import LobbyLine from '../../Components/Elements/LobbyLine'
import LayoutContent from '../../Components/Layouts/LayoutContent'

import history from '../Routers/history'


const LobbyList = () => {
  const lobbyList = useSelector((state: RootState) => state.lobbyList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLobbyListActions.request())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <LayoutContent>
      <List>
        <ListItem>{lobbyList.map((lobby) => <LobbyLine key={lobby.id} lobby={lobby} />)}</ListItem>
      </List>
      <Button onClick={() => history.push('/lobby/create')}>Create Lobby</Button>
    </LayoutContent>
  )
}

export default LobbyList
