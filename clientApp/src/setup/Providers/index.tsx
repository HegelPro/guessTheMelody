import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from '../theme'
import { store } from '../../store'

import history from '../../Containers/Routers/history'

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children } : IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <CssBaseline />
          {children}
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers