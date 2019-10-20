import React from 'react'
import { Route } from 'react-router-dom'

import { IRouteData } from '../types'


const RouteWithSubRoutes = (route: IRouteData) => {
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        <route.component {...props} path={route.path} routes={route.routes} />
      )}
    />
  )
}

export default RouteWithSubRoutes