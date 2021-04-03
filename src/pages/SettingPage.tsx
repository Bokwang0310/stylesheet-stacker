import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import useStyles from '../styles';
import { RootState } from '../store/modules';
import {
  changePrimaryColor,
  changeSecondaryColor,
  toggleNightMode,
} from '../store/modules/setting';

function SettingPage() {
  const [openPicker, setOpenPicker] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const { primaryColor, secondaryColor, nightMode } = useSelector(
    (state: RootState) => state.setting
  );

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
                dispatch(toggleNightMode());
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
                  dispatch(changePrimaryColor(color.hex.toUpperCase()));
                }}
              />
            ) : openPicker === 'secondary' ? (
              <ChromePicker
                className={classes.colorPicker}
                disableAlpha
                color={secondaryColor}
                onChange={color => {
                  dispatch(changeSecondaryColor(color.hex.toUpperCase()));
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
