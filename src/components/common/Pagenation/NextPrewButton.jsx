import React from 'react'
import cn from 'classnames'

const NextPrewButton = ({ page, onPageChanged, text, disabled }) => (
  <li className={cn('page-item', { 'disabled': disabled })}>
    <button
      type="button"
      className="page-link"
      tabIndex={disabled ? "-1" : "0"}
      onClick={() => !disabled && onPageChanged(page)}
      onKeyDown={() => !disabled && onPageChanged(page)}
    >
      {text}
    </button>
  </li>
)


export default NextPrewButton
