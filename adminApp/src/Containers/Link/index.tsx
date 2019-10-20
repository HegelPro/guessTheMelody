import React, { ComponentProps } from 'react'

import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

interface IProps extends Pick<ComponentProps<typeof RouterLink>, 'to' | 'style'>{
  children: React.ReactNode,
}

export const Link = ({
  to,
  style,
  children,
}: IProps) => (
  <RouterLink
    to={to}
    style={style}
  >
    <Button>{children}</Button>
  </RouterLink>
)