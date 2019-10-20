export interface IRouteData {
  path: string
  component: (props: any) => JSX.Element
  exact?: boolean
  routes?: IRouteData[]
}