import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavItem.module.css'

const NavItem = props => (
  <div className={s.item}>
    <NavLink to={props.linkTo} className={s.item} activeClassName={s.activeLink}>
      <img src={props.imgSrc} alt="..." />
      <span className={s.navTxt}>{props.name}</span>
    </NavLink>
  </div>
)

export default NavItem
