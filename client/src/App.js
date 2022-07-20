import React, { useEffect, useState } from 'react'
import Table from "./components/Table";
import Filter from "./components/Filter";
import infoController from './controllers/InfoController'

function App() {
  const [rows, setRows] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    infoController.getInfo().then((res) => {
      setLoad(true)
      setRows(res)
    })
  }, [])
  return (
    <div>
      <Filter setRows={setRows} setLoad={setLoad} />
      <Table rows={rows} load={load} />
    </div>
  );
}

export default App;
