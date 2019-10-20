import React from 'react'
import './App.css'

import { Layout } from './Containers/Layout'
import { Routers } from './Containers/Routers'
import { Setup } from './Containers/Setup'


const App: React.FC = () => {
  return (
    <Setup>
      <Layout>
        <Routers />
      </Layout>
    </Setup>
  )
}

export default App
