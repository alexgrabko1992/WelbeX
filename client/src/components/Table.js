import React, {useEffect, useState} from 'react'
import Row from './Row'
import Pagination from './Pagination'

export default function Table({rows, load}) {
  const [currPage, setCurrPage] = useState(1)
  const [rowsPerPage] = useState(10)

  const lastRowIndex = currPage * rowsPerPage
  const firstRowIndex = lastRowIndex - rowsPerPage
  const currRows = rows.slice(firstRowIndex, lastRowIndex)

  const paginate = (pageNumber) => {
    setCurrPage(pageNumber)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Number</th>
            <th>Distant</th>
          </tr>
        </thead>
        <tbody>
          {load ? currRows.map((e) => <Row key={e.id} rows={e} />) : (<tr><td>Loading ...</td></tr>)}
        </tbody>
      </table>
      <Pagination rowsPerPage={rowsPerPage} totalRows={rows.length} paginate={paginate} />
    </div>
  )
}
