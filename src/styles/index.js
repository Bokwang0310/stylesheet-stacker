import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  moreButton: {
    marginLeft: theme.spacing(2),
  },
  header: {
    flexGrow: 1,
  },
  mainFab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  colorPaperRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
      backgroundColor: '#c1f1f3',
    },
  },
  sheetFab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
  subheader: {
    fontSize: '18px',
    backgroundColor: theme.palette.background.default,
  },
  modifyIcon: {
    padding: '0px',
    marginLeft: theme.spacing(1),
    marginRight: '2px',
    marginTop: '0px',
    marginBottom: '3px',
  },
  deleteIcon: {
    padding: '0px',
    marginLeft: '2px',
    marginRight: theme.spacing(1),
    marginTop: '0px',
    marginBottom: '3px',
  },
}));

export default useStyles;
