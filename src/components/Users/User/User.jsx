import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import userPhoto from '../../../assets/images/userLogo.png'

const User = ({
  user,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div key={user.id}>
      <span>
        <div className={s.userDescription}>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={s.userPhoto}
                alt=""
                align="middle"
              />
            </NavLink>
          </div>
          <div>
            {user.name}
            <br />
            {user.status}
          </div>
        </div>
        <div className={s.follow_unfollowBtn}>
          <button
            type="button"
            className={user.followed ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'}
            onClick={user.followed ? () => unfollow(user.id) : () => follow(user.id)}
            disabled={followingInProgress.some(id => id === user.id)}
          >
            {user.followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </span>
    </div>
  )

}

export default User
