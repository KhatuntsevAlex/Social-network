import React from 'react'
import s from './Users.module.css'
import Pagenation from '../common/Pagenation/Pagenation'
import User from './User/User'

const Users = ({
  totalUsersCount, users, onPageChanged,
  pageSize, followingInProgress,
  follow, unfollow, currentPage,
}) => {
  return (
    <div className={s.users}>
      <Pagenation
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        currentPage={currentPage}
      />
      {users.map(user => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      )
      )}
      <Pagenation
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Users
