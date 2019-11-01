import React from 'react'
import { useStyles } from './styles'


interface IProps {
  children: React.ReactNode
}

const Screen = ({
  children,
}: IProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default Screen
