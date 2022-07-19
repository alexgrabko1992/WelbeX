import React, {useEffect, useState} from 'react'
import Row from './Row'
import infoController from '../controllers/InfoController'
import Pagination from './Pagination'

export default function Table() {
  const [rows, setRows] = useState([])
  const [load, setLoad] = useState(false)
  const [currPage, setCurrPage] = useState(1)
  const [rowsPerPage] = useState(10)

  useEffect(() => {
    infoController.getInfo().then((res) => {
      setLoad(true)
      setRows(res)
    })
  }, [])

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
