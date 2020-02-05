import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Results from './lateResults.js'
import Games from './Games.js'
import ComplexGrid from './ComplexGrid.js'

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
        </Toolbar>
      </AppBar>

      <Games />
      <ComplexGrid />
    </div>
  );
}

