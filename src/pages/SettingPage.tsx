import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ChromePicker } from 'react-color';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

import useStyles from 'styles';
import { colorState, nightModeState } from 'state/setting';

function SettingPage() {
  const [openPicker, setOpenPicker] = useState('');
  const classes = useStyles();

  const [colorList, setColorList] = useRecoilState(colorState);
  const [primaryColor, secondaryColor] = colorList;

  const [nightMode, setNightMode] = useRecoilState(nightModeState);

  const setPrimaryColor = (newColor: string) => {
    setColorList([newColor, colorList[1]]);
  };
  const setSecondaryColor = (newColor: string) => {
    setColorList([colorList[0], newColor]);
  };

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      {openPicker && (
        <div
          className={classes.colorPickerPopOver}
          onClick={() => setOpenPicker('')}
        />
      )}
      <List
        subheader={
          <ListSubheader color="primary" component="div">
            Theme
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText>
            <Box color="text.primary">Night Mode</Box>
          </ListItemText>
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={() => {
                toggleNightMode();
              }}
              checked={nightMode}
            ></Switch>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                inputProps={{ readOnly: true }}
                label="Primary Color"
                margin="dense"
                type="text"
                value={primaryColor}
                onFocus={() => setOpenPicker('primary')}
              />
            </Grid>
            <Grid item>
              <TextField
                inputProps={{ readOnly: true }}
                label="Secondary Color"
                margin="dense"
                type="text"
                value={secondaryColor}
                onFocus={() => setOpenPicker('secondary')}
              />
            </Grid>
            {openPicker === 'primary' ? (
              <ChromePicker
                className={classes.colorPicker}
                disableAlpha
                color={primaryColor}
                onChange={color => {
                  setPrimaryColor(color.hex.toUpperCase());
                }}
              />
            ) : openPicker === 'secondary' ? (
              <ChromePicker
                className={classes.colorPicker}
                disableAlpha
                color={secondaryColor}
                onChange={color => {
                  setSecondaryColor(color.hex.toUpperCase());
                }}
              />
            ) : null}
          </Grid>
        </ListItem>
      </List>
      <List>
        <Divider />
      </List>
    </>
  );
}

export default SettingPage;
