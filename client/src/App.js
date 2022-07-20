import React, { useEffect, useState } from 'react'
import Table from "./components/Table";
import Filter from "./components/Filter";
import infoController from './controllers/InfoController'

function App() {
  const [rows, setRows] = useState([])
  const [load, setLoad] = useState(false)
  const [currPage, setCurrPage] = useState(1)

  useEffect(() => {
    infoController.getInfo().then((res) => {
      setLoad(true)
      setRows(res)
    })
  }, [])
  return (
    <div>
      <Filter setRows={setRows} setLoad={setLoad} setCurrPage={setCurrPage} />
      <Table rows={rows} load={load} currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
}

export default App;
