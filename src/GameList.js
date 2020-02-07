import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LogoLAL from './images/LogoLAL.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight:  'auto',
    marginTop: 5,
    maxWidth: 600,
  },
  image: {
    width: 64,
    height: 64,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


export default function GameList(props) {
  const classes = useStyles();
  const games = props.games.map((game) => {

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {game.home_team.full_name} {game.home_team_score}
                  </Typography>
                </Grid>
                 <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {game.visitor_team.full_name} {game.visitor_team_score}
                  </Typography> 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div> 
    )
  })

  return (
    <div>
        {games}
    </div>
  )
}