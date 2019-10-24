import React from 'react'

import './index.css'

import Routers from './Containers/Routers'
import Navigation from './Components/Elements/Navigation'
import LayoutMain from './Components/Layouts/LayoutMain'
import Providers from './setup/Providers'
import ErrorNotification from './Containers/ErrorNotification'
import Session from './Containers/Session'

const App: React.FC = () => (
  <Providers>
    <Session />
    <LayoutMain>
      <Navigation />
      <ErrorNotification />    
      <Routers />
    </LayoutMain>
  </Providers>
)

export default App