import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
  selectUsersSuper,
  selectPageSize,
  selectTotalUsersCount,
  selectCurrentPage,
  selectIsFetching,
  selectFollowingInProgress,
} from '../../redux/users-selectors'

const UsersContainer = props => {
  const { currentPage, pageSize, isFetching, ...funcs } = props
  useEffect(() => {
    funcs.getUsers(currentPage, pageSize)
  }, [currentPage, pageSize])

  const onPageChanged = (p) => {
    funcs.getUsers(p, pageSize)
  }

  return <>
    {
      isFetching
        ? <Preloader />
        : <Users {...props} onPageChanged={onPageChanged} />
    }
  </>

}

const mapStateToProps = (state) => {
  return {
    users: selectUsersSuper(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state),
  }
}

const mapDispatchToProps = { follow, unfollow, setCurrentPage, getUsers }

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(UsersContainer)
