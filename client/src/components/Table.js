import React, { useState} from 'react'
import Row from './Row'
import Pagination from './Pagination'

export default function Table({ rows, load, currPage, setCurrPage }) {
  const [rowsPerPage] = useState(10) // Количество отображаемых строк на странице

  const lastRowIndex = currPage * rowsPerPage  // Последний индекс строки
  const firstRowIndex = lastRowIndex - rowsPerPage // Первый индекс строки
  const currRows = rows.slice(firstRowIndex, lastRowIndex) // Строки для отображения на данной странице

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
