import React from 'react'
import NextPrewButton from './NextPrewButton'

const Pagenation = ({
  totalUsersCount,
  onPageChanged,
  pageSize,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  if (pages.length > 11) {
    if (currentPage > 4 && currentPage < pageCount - 4) {
      pages = ['...', ...pages.slice(currentPage - 4, currentPage + 4), '...']
    } else {
      pages = [...pages.slice(0, 5), '...', ...pages.slice(-5)]
    }

  }
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const stepSize = 10 // number of skipped pages 

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm justify-content-center">
        <NextPrewButton
          page={1}
          onPageChanged={onPageChanged}
          text="<<<"
          disabled={currentPage <= 1}
        />
        <NextPrewButton
          page={(currentPage - stepSize) < 1 ? 1 : (currentPage - stepSize)}
          onPageChanged={onPageChanged}
          text={`<<`}
          disabled={currentPage <= 1}
        />
        <NextPrewButton
          page={prevPage}
          onPageChanged={onPageChanged}
          text="<"
          disabled={currentPage <= 1}
        />
        {pages.map(p => (
          <li
            key={p}
            className={`page-item ${p === currentPage && 'active'} ${p === '...' && 'disabled'}`}
          >
            <button
              type="button"
              className="page-link"
              onClick={() => p !== '...' && onPageChanged(p)}
              onKeyDown={() => p !== '...' && onPageChanged(p)}
              tabIndex={p === currentPage ? "-1" : "0"}
              disabled={p === currentPage}
            >
              {p}
            </button>
          </li>
        ))}
        <NextPrewButton
          page={nextPage}
          onPageChanged={onPageChanged}
          text=">"
          disabled={currentPage >= pageCount}
        />
        <NextPrewButton
          page={(currentPage + stepSize) > pageCount ? pageCount : (currentPage + stepSize)}
          onPageChanged={onPageChanged}
          text={`>>`}
          disabled={currentPage >= pageCount}
        />
        <NextPrewButton
          page={pageCount}
          onPageChanged={onPageChanged}
          text=">>>"
          disabled={currentPage >= pageCount}
        />
      </ul>
    </nav>
  )
}

export default Pagenation
