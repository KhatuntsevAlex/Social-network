import React from 'react'
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

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize)
  }

  render() {
    return <>
      {
        this.props.isFetching
          ? <Preloader />
          : <Users {...this.props} onPageChanged={this.onPageChanged} />
      }
    </>
  }
}

/* const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
} */
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
