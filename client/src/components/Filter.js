import React from 'react'
import infoController from '../controllers/InfoController'

export default function Filter({ setRows, setLoad, setCurrPage }) {
  const handleClick = async () => {
    setLoad(false)
    const columnValue = document.getElementById("columns").value
    const optionValue = document.getElementById("options").value
    const filterValue = document.getElementById("value").value

    const query = {
      column: columnValue,
      option: optionValue,
      filter: filterValue
    }
    infoController.getFilteredInfo(query).then((res) => {
      setRows(res)
      setLoad(true)
      setCurrPage(1)
    })
  }
  return (
    <div>
          <label htmlFor="columns">Choose the column:</label>
          <select id="columns" name="columns">
              <option value="name">Name</option>
              <option value="number">Number</option>
              <option value="distant">Distant</option>
          </select>
          <br />
          <label htmlFor="options">Choose the option:</label>
          <select id="options" name="options">
              <option value="equal">Equal</option>
              <option value="include">Include</option>
              <option value="more">More</option>
              <option value="less">Less</option>
          </select>
          <br />
          <label htmlFor="value">Input value for filter:</label>
          <input type="text" id="value" name="value"></input>
          <br />
          <button onClick={handleClick}>Filter</button>
    </div>
  )
}
