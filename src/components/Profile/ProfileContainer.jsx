import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { getUserProfile, getStatus } from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params
    const { authorizedUserId, isAuth } = this.props
    if (!userId) {
      userId = authorizedUserId
      if (!userId)
        this.props.history.push('/login')
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() { return <Profile {...this.props} /> }
}

const mapStateToProps = state => ({
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = { getUserProfile, getStatus }

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withRouter
)(ProfileContainer)
