import React from 'react'
import { useStyles } from './styles'


interface IProps {
  children: React.ReactNode
}

const Screen = ({
  children,
}: IProps) => {
  const classNames = useStyles()
  return (
    <div className={classNames.root}>
      {children}
    </div>
  )
}

export default Screen
