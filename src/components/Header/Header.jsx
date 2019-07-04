import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = ({ isAuth, login, userId }) => (
  <header className={s.header}>
    <img
      src="https://previews.123rf.com/images/dr911/dr9111407/dr911140700077/30219208-human-head-creating-a-new-idea-creative-idea-vector.jpg"
      alt="..."
    />
    <div className={s.loginBlock}>
      {
        isAuth
          ? (
            <NavLink to={`/profile/${userId}`}>
              {login}
            </NavLink>
          )
          : (
            <NavLink to="/login">
              <button className="btn btn-success" type="button">Login</button>
            </NavLink>
          )
      }

    </div>
  </header>
)

export default Header
