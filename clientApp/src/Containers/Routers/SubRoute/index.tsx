import React from 'react'
import { Switch, useLocation } from 'react-router-dom'

import RouteWithSubRoutes from '../RouteWithSubRoutes'
import { IRouteData } from '../types'
import NotFound from '../../../Components/NotFound'


interface IProps {
  path: string
  routes: IRouteData[]
}

const SubRoute = ({
    path,
    routes
  }: IProps) => {
  return useLocation().pathname !== path
    ? (
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      )
    : <NotFound />
}

export default SubRoute