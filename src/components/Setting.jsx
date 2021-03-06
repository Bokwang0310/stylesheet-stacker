import { useRef, useState } from 'react';

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

function Setting({ changeColor, changeMode, mode }) {
  const [colors, setColors] = useState(['#FC5454', '#FF8585']);

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
                value={colors[0]}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Secondary Color"
                margin="dense"
                type="text"
                value={colors[1]}
              />
            </Grid>
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
