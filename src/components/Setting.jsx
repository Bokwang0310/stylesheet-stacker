import { useState } from 'react';
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

function Setting({ colors, changeColor, changeMode, mode }) {
  const [openPicker, setOpenPicker] = useState('');

  return (
    <>
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
              onChange={e => {
                changeMode(e.target.checked ? 'dark' : 'light');
              }}
              checked={mode === 'light' ? false : true}
            ></Switch>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                label="Primary Color"
                margin="dense"
                type="text"
                value={colors.primary}
                onFocus={() => setOpenPicker('primary')}
                onBlur={() => setOpenPicker('')}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Secondary Color"
                margin="dense"
                type="text"
                value={colors.secondary}
                onFocus={() => setOpenPicker('secondary')}
                onBlur={() => setOpenPicker('')}
              />
            </Grid>
            {openPicker === 'primary' ? (
              <ChromePicker
                color={colors.primary}
                onChange={color => {
                  changeColor({
                    ...colors,
                    primary: color.hex.toUpperCase()
                  });
                }}
              />
            ) : openPicker === 'secondary' ? (
              <ChromePicker
                color={colors.secondary}
                onChange={color => {
                  changeColor({
                    ...colors,
                    secondary: color.hex.toUpperCase()
                  });
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

export default Setting;
