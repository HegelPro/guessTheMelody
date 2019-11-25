import { makeStyles, Theme } from '@material-ui/core'


export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    background: theme.palette.secondary.main,
  }
}))