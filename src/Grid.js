import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const fakeData = {
  score1: '120',
  name1: 'Los Angeles Lakers',
  score2: '117',
  name2: 'Los Angeles Clippers',
  score3: '123',
  name3: 'Milwauke Bucks',
  score4: '137',
  name4: 'Dallas Mavericks',
  score5: '',
  name5: '',
  score6: '',
  name6: '',
  score7: '',
  name7: '',
  score8: '',
  name8: '',
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Latest Results</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name1} {fakeData.score1}-{fakeData.score2} {fakeData.name2}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name3} {fakeData.score3}-{fakeData.score4} {fakeData.name4}</Paper>
        </Grid>
 		<Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name5} {fakeData.score5}-{fakeData.score6} {fakeData.name6}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name7} {fakeData.score7}-{fakeData.score8} {fakeData.name8}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name9} {fakeData.score9}-{fakeData.score10} {fakeData.name10}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name11} {fakeData.score11}-{fakeData.score12} {fakeData.name12}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name13} {fakeData.score13}-{fakeData.score14} {fakeData.name14}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name15} {fakeData.score15}-{fakeData.score16} {fakeData.name16}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name17} {fakeData.score17}-{fakeData.score18} {fakeData.name18}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{fakeData.name19} {fakeData.score19}-{fakeData.score20} {fakeData.name20}</Paper>
        </Grid>

      </Grid>
    </div>
  );
}