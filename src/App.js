import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Games from './Games.js'
import Button2 from './Button2'
import Teams from './Teams'

const useStyles = makeStyles(theme => ({
  root: {
  }  
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            NBA
          </Typography>
          <Button2 />
        </Toolbar>
      </AppBar>
      <Teams />
      <Games />
    </div>
  );
}

