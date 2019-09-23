import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './Header.module.css'
import { logout } from '../../redux/auth-reduser'

const Header = ({ isAuth, login, userId, ...funcs }) => (
  <header className={s.header}>
    <img
      src="https://previews.123rf.com/images/dr911/dr9111407/dr911140700077/30219208-human-head-creating-a-new-idea-creative-idea-vector.jpg"
      alt="..."
    />
    <div className={s.loginBlock}>
      {
        isAuth
          ? (
            <div className={s.loginTrue}>
              <NavLink to="/profile">
                {login}
              </NavLink>
              <span style={{ color: 'white' }}> - </span>
              <button
                className="btn btn-sm btn-danger ml-2"
                type="button"
                onClick={funcs.logout}
              >
                {'Log out'}
              </button>
            </div>
          )
          : (
            <NavLink to="/login">
              <button className="btn btn-success" type="button">Log in</button>
            </NavLink>
          )
      }

    </div>
  </header>
)

const mapStateToProps = state => ({
  login: state.auth.login,
  userId: state.auth.id,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header)

