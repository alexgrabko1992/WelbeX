import React from 'react'

export default function Row({info}) {
  return (
    <tr>
      <td>{info.date}</td>
      <td>{info.name}</td>
      <td>{info.number}</td>
      <td>{info.distant}</td>
    </tr>
  )
}
