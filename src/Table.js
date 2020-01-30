import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  const TableBody = rops => {
    const rows = props,characterData.map((row,index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.w-l}</td>)
        </tr>
      )
  })

  return <tbody>{rows}<tbody>
  }
}

export default Table