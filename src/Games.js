import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GameList from './GameList'

const fakeData = {
  games: [
    {
      teams: [
        {name: 'Lakers', score: 1},
        {name: 'Clippers', score: 115} 
      ]
    },
    {
      teams: [
        {name: 'Bucks', score: 1},
        {name: '79ers', score: 115} 
      ]
    }
  ]
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Games() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>Latest Results</Paper>
      <GameList games={fakeData.games}/>
    </div>
  );
}
