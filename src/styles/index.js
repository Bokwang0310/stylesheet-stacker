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
    '& > .MuiPaper-elevation3': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      width: theme.spacing(10),
      height: theme.spacing(10),
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  modifySectionButton: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
