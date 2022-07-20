import React from 'react'

export default function Pagination ({ rowsPerPage, totalRows, paginate }) {
    const pageNumbers = []

    // Получаем номера для отображения пагинации
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
      <div>
        <ul>
                {pageNumbers.map((e) => {
                    return (
                        <li key={e}>
                            <a href='!#' onClick={() => paginate(e)}>{e}</a>
                        </li>)
            })}
        </ul>
      </div>
  )
}
