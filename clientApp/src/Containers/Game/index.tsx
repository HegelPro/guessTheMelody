import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import PlayerList from '../../Components/Elements/PlayerList'
import TextField from '@material-ui/core/TextField'
import Word from '../../Components/Elements/Word'
import Screen from '../../Components/Elements/Screen'
import LayoutContent from '../../Components/Layouts/LayoutContent'

import { RootState } from '../../store/types'


const Game = () => {
  const [whatSongValue, setWhatSongValue] = useState('')
  const word = useSelector((state: RootState) => state.game.word)
  return (
    <LayoutContent>
      <Screen>
        <Word letters={word} />
      </Screen>
      <PlayerList />
      <TextField
        label='What the song?'
        value={whatSongValue}
        onChange={({target: {value}}) => setWhatSongValue(value)}
      />
    </LayoutContent>
  )
}

export default Game
