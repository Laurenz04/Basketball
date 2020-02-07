import React from'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
  }
  }
}));

export default function Button2(){
	const classes = useStyles();

	return(
		<div classname={classes.root} style={{float: 'right'}}>
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
              <Button style={{float: 'right'}}>Latest Results</Button>
              <Button style={{float: 'right'}}>Standings</Button>
            </ButtonGroup>
        </div>
    )
}



