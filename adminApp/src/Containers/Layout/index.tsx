import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import { Navigation } from '../Navigation'

interface IProps {
  children: React.ReactNode
}

export const Layout = ({
  children,
}: IProps) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
  );
}