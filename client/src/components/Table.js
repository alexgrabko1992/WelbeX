import React, {useEffect, useState} from 'react'
import Row from './Row'
import infoController from '../controllers/InfoController'

export default function Table() {
  const [info, setInfo] = useState()

  useEffect(() => {
    infoController.getInfo().then((res) => {
      setInfo(res)
    })
  }, [])
  return (
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
        {info ? info.map((e) => <Row key={e.id} info={e} />) : console.log("Empty")}
          </tbody>
    </table>
  )
}
