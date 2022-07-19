import React from 'react'

export default function Filter() {
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
          <button>Filter</button>
    </div>
  )
}
