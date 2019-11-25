import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import PlayerList from '../../Components/Elements/PlayerList'
import TextField from '@material-ui/core/TextField'
import Word from '../../Components/Elements/Word'
import Screen from '../../Components/Elements/Screen'
import LayoutContent from '../../Components/Layouts/LayoutContent'

import { RootState } from '../../store/types'
import { guessSongActions } from './actions'
import AudioAnalyser from '../AudioAnalyser'
import { getAudioUrl } from '../../api'


const Game = () => {
  const dispath = useDispatch()
  const [whatSongValue, setWhatSongValue] = useState('')
  const word = useSelector((state: RootState) => state.game.word)
  const song = useSelector((state: RootState) => state.game.song)
  const players = useSelector((state: RootState) => state.lobby.players)
  return (
    <LayoutContent>
      <Box
        height='100%'
        display='flex'
        flexDirection='column'
      >
        <Box flexGrow={1}>
          <Screen>
            <Word word={word} />
          </Screen>
        </Box>
        <PlayerList players={players} />
        <AudioAnalyser url={getAudioUrl(song.url)} />
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
      </Box>
    </LayoutContent>
  )
}

export default Game
