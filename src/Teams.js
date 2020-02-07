import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TeamList from'./TeamList'
import { BallDontLie } from '@jharrilim/balldontlie-client';

const teams = []
const api = BallDontLie.v1()

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Teams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: []
    }
  }

  componentWillMount() {
    const teamsGenerator = api.teams(0,3)
    teamsGenerator.next().then(response => {
      this.setState({
        ...this.state,
        teams: response.value
      })
    })
  }

  render() {
    //const classes = useStyles();
    // className={classes.paper}

    return (
      <div>
        <Paper>Teams</Paper>
        <TeamList teams={this.state.teams}/>
      </div>
    );
  }
}

export default Teams
