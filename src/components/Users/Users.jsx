import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import userPhoto from '../../assets/images/userLogo.png'

const Users = ({
  totalUsersCount, users, onPageChanged,
  pageSize, followingInProgress,
  follow, unfollow, currentPage,
}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return (
    <div className={s.users}>

      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {pages.map(p => (
            <div
              key={p.id}
              onClick={() => onPageChanged(p)}
              onKeyDown={() => onPageChanged(p)}
              role="button"
              tabIndex={p}
            >
              <li className="page-item">
                <button role="link" className={`page-link ${p === currentPage && s.selectedPage}`} type="button">
                  {p}
                </button>
              </li>
            </div>
          ))}
        </ul>
      </nav>

      {users.map(u => (
        <div key={u.id}>
          <span>
            <div className={s.userDescription}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={s.userPhoto}
                    alt=""
                    align="middle"
                  />
                </NavLink>
              </div>
              <div>
                {u.name}
                <br />
                {u.status}
              </div>
            </div>
            <div className={s.follow_unfollowBtn}>
              <button
                type="button"
                className={u.followed ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'}
                onClick={u.followed ? () => unfollow(u.id) : () => follow(u.id)}
                disabled={followingInProgress.some(id => id === u.id)}
              >
                {u.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          </span>
        </div>
      ))
      }
    </div>
  )
}


export default Users
