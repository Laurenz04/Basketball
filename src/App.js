import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Games from './Games.js'
import Button2 from './Button2'
import Teams from './Teams'

// const useStyles = makeStyles(theme => ({
//   root: {
//   }  
// }));

class App extends React.Component {
  // constructor 
  constructor(props) {
    super(props)
    this.state = {
      currentTab:  'games'
    }
  }
  seeTeams = () => {
   // currentTab = 'teams'
      this.setState({
        currentTab: 'teams' 
      })
    // setState
  }
  seeResults = () => {
    this.setState({
      currentTab: 'games'
    })
  }

  // seeResults

  render() {
    let currentTab
    if (this.state.currentTab == 'teams') {
      currentTab = (<Teams />)
    } else if (this.state.currentTab == 'games') {
      currentTab = (<Games />)
    }

    return ( // JSX
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              NBA
            </Typography>
            <Button2 seeTeams={this.seeTeams} seeResults={this.seeResults}/>
          </Toolbar>
        </AppBar>
        {currentTab}
      </div>
    );
  }
}

export default App