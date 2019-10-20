import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

interface IProps {
  children: React.ReactNode,
}

export const Setup = ({
  children,
}: IProps) => {
  return (
    <Router>
      {children}
    </Router>
  )
}