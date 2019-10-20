import React from 'react'

import Routers from './Containers/Routers'
import Navigation from './Components/Navigation'
import Layout from './Components/Layout'
import Providers from './setup/Providers'
import ErrorNotification from './Containers/ErrorNotification'

const App: React.FC = () => (
  <Providers>
    <Navigation />
    <Layout>
      <ErrorNotification />    
      <Routers />
    </Layout>
  </Providers>
)

export default App