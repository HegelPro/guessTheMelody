import React from 'react'
import { Switch } from 'react-router'

import RouteWithSubRoutes from '../Routers/RouteWithSubRoutes'
import { IRouteData } from '../Routers/types'


interface IProps {
  routes: IRouteData[]
}

const Authterisation = ({ routes }: IProps) => {
  return (
    <div>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default Authterisation