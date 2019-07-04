import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MyFriends.module.css'

const MyFriends = props => (
  <div className={s.item}>
    <NavLink to={`/${props.name}${props.id}`} activeClassName={s.activeLink}>
      <img src={props.avaSrc} alt="..." />
      <div className={s.friendName}>{props.name}</div>
    </NavLink>
  </div>

)

export default MyFriends
