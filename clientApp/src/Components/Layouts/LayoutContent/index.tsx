import React from 'react'

import { Container, Paper } from '@material-ui/core'
import { useStyles } from './stypes'

interface IProps {
  children: React.ReactNode
} 

const LayoutContent = ({ children }: IProps) => {
  const classNames = useStyles()
  return (
    <Container>
      <Paper className={classNames.root}>
        {children}
      </Paper>
    </Container>
  )
}

export default LayoutContent
