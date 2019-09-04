import React from 'react'

const NextPrewButton = ({ page, onPageChanged, text, disabled }) => {
  const nextOrPrewPage = page
  return (
    <li className={`page-item ${disabled && 'disabled'}`}>
      <button
        type="button"
        className="page-link"
        tabIndex={disabled ? "-1" : "0"}
        onClick={() => !disabled && onPageChanged(nextOrPrewPage)}
        onKeyDown={() => !disabled && onPageChanged(nextOrPrewPage)}
      >
        {text}
      </button>
    </li>)
}

export default NextPrewButton
