import React from 'react'
import {
  Switch,
  // Route,
} from 'react-router-dom'

import routerConfig from './config'

import RouteWithSubRoutes from './RouteWithSubRoutes'


const Routers = () => {
  return (
    <Switch>
      {routerConfig.map(({
        path,
        component,
        exact,
        routes,
      }, i) => <RouteWithSubRoutes key={i} path={path} component={component} exact={exact} routes={routes} />)}
    </Switch>
  )
}

export default Routers
