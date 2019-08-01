import React from 'react'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import Typography from '@material-ui/core/Typography';



const ErrorNotification = () => {
  const classes = useStyles()
  const error = useSelector((state: RootState) => state.error)
  return (
    error.message
      ? (
        <div className={classes.root}>
          <Typography variant='h4'>
            Error: {error.message}
          </Typography>
        </div>
      )
      : null
    
  )
}

export default ErrorNotification
