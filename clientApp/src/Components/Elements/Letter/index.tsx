import React from 'react'
import classnames from 'classnames'

import { useStyles } from './styles'


interface IProps {
  isHidden: boolean
  children: React.ReactNode
}

const Letter = ({
  isHidden,
  children,
}: IProps) => {
  const classes = useStyles()
  return (
    <div className={classnames(classes.root, {
      [classes.hidden]: isHidden,
    })}>
      {children}
    </div>
  )
}

export default Letter
