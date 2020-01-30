
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <table>
        	<TableHeader />
        	<TableBody />
        </table>
      </div>
    )
  }
}

export default App