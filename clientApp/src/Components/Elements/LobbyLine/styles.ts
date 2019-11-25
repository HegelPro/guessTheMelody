import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
  })
)