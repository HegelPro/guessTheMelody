import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  paper: {
    height: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  }
}))