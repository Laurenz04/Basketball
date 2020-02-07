import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GameList from './GameList'

import { BallDontLie } from '@jharrilim/balldontlie-client';

const games = []
const api = BallDontLie.v1()

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Games extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  }

  componentWillMount() {
    const gamesGenerator = api.games(0,3)
    gamesGenerator.next().then(response => {
      this.setState({
        ...this.state,
        games: response.value
      })
    })
  }

  render() {
    //const classes = useStyles();
    // className={classes.paper}

    return (
      <div>
        <Paper>Latest Results</Paper>
        <GameList games={this.state.games}/>
      </div>
    );
  }
}

export default Games
