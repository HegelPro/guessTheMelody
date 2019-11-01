import React from 'react'

import Letter from '../Letter'

import { IWord } from '../../../Containers/Game/types'
import { useStyles } from './styles'


interface IProps {
  word: IWord
}

const Word = ({
  word,
}: IProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {word.map(({char, isHidden}, i) => <Letter isHidden={isHidden} key={i}>{char}</Letter>)}
    </div>
  )
}

export default Word
