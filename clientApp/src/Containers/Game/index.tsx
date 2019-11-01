import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'

import PlayerList from '../../Components/Elements/PlayerList'
import TextField from '@material-ui/core/TextField'
import Word from '../../Components/Elements/Word'
import Screen from '../../Components/Elements/Screen'
import LayoutContent from '../../Components/Layouts/LayoutContent'

import { RootState } from '../../store/types'
import { guessSongActions } from './actions'


const Game = () => {
  const dispath = useDispatch()
  const [whatSongValue, setWhatSongValue] = useState('')
  const word = useSelector((state: RootState) => state.game.word)
  const song = useSelector((state: RootState) => state.game.song)
  return (
    <LayoutContent>
      <Screen>
        <Word word={word} />
      </Screen>
      <PlayerList />
      <audio src={`http://localhost:5000${song.url}`} controls />
      <TextField
        label='What the song?'
        value={whatSongValue}
        onChange={({target: {value}}) => setWhatSongValue(value)}
      />
      <Button
        onClick={() => {
          dispath(guessSongActions.request(whatSongValue))
        }}
      >Send</Button>
    </LayoutContent>
  )
}

export default Game
