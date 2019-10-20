import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from '../theme'
import { store } from '../../store'

import { createBrowserHistory } from 'history'

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children } : IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={createBrowserHistory({})}>
          <CssBaseline />
          {children}
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers