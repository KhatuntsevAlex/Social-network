import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
  const { id, avaSrc, name } = props
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.activeLink}>
        <img src={avaSrc} alt="..." />
        <span className={s.dialTxt}>{name}</span>
      </NavLink>
    </div>
  )
}


export default DialogItem
