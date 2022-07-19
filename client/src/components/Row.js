import React from 'react'

export default function Row({ rows }) {
  return (
    <tr>
      <td>{rows.date}</td>
      <td>{rows.name}</td>
      <td>{rows.number}</td>
      <td>{rows.distant}</td>
    </tr>
  )
}
