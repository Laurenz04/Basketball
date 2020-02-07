import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TeamList(props) {
  const classes = useStyles();
  const teams = props.teams.map((team) => {

    return (
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {team.full_name}
        </StyledTableCell>
        <StyledTableCell align="right">{team.conference}</StyledTableCell>
        <StyledTableCell align="right">{team.division}</StyledTableCell>
      </StyledTableRow> 
    );
  })
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell>Team</StyledTableCell>
                  <StyledTableCell align="right">Conference</StyledTableCell>
                  <StyledTableCell align="right">Division</StyledTableCell>
              </TableRow>
           </TableHead>
           <TableBody>
            {teams}
           </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

