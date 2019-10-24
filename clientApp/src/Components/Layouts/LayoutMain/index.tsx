import React from 'react'

import { useStyles } from './stypes'


interface IProps {
  children: React.ReactNode
}

const LayoutMain = ({
  children,
}: IProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default LayoutMain
