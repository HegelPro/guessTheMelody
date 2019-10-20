import React from 'react'
import {
  Route,
  Switch,
} from 'react-router'

import { SongAddForm } from '../SongAddForm'
import { SongEditForm } from '../SongEditForm'
import { SongList } from '../SongList'

export const Routers = () => {
  return (
    <Switch>
      <Route path='/songs/add'>
        <SongAddForm />
      </Route>
      <Route path='/songs/edit/:id'>
        <SongEditForm />
      </Route>
      <Route path='/songs'>
        <SongList />
      </Route>
    </Switch>
  )
}