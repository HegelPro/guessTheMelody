import React from 'react'

import Routers from './Containers/Routers'
import Navigation from './Components/Navigation'
import Layout from './Components/Layout'
import Providers from './setup/Providers'
import ErrorNotification from './Containers/ErrorNotification'

const App: React.FC = () => (
  <Providers>
    <Layout>
      <ErrorNotification />
      <Navigation />    
      <Routers />
    </Layout>
  </Providers>
)

export default App