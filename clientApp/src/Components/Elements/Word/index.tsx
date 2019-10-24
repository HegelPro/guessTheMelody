import React from 'react'

import Letter from '../Letter'

import { ILetter } from '../../../Containers/Game/types'
import { useStyles } from './styles'


interface IProps {
  letters: ILetter[]
}

const Word = ({
  letters,
}: IProps) => {
  const classNames = useStyles()
  return (
    <div className={classNames.root}>
      {letters.map(({char}, i) => <Letter key={i}>{char}</Letter>)}
    </div>
  )
}

export default Word
