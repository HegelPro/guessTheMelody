import React from 'react'

import { Container, Paper } from '@material-ui/core'
import { useStyles } from './stypes'

interface IProps {
  children: React.ReactNode
} 

const LayoutContent = ({ children }: IProps) => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </Container>
  )
}

export default LayoutContent
