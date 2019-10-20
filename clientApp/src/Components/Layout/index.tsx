import React from 'react'

import { Container } from '@material-ui/core'

interface IProps {
  children: React.ReactNode
} 

const Layout = ({ children }: IProps) => {
  
  return (
    <Container>
      <div>
        {children}
      </div>
    </Container>
  )
}

export default Layout
