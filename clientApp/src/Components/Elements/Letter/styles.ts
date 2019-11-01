import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: theme.spacing(1),
      margin: theme.spacing(1),
      background: theme.palette.grey[700],
    },
    hidden: {
      background: 'green'
    }
  })
)