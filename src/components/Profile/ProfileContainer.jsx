import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { getUserProfile, getStatus } from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId || prevProps.isAuth !== this.props.isAuth)
      this.refreshProfile()
  }

  refreshProfile = () => {
    let { userId } = this.props.match.params
    const { authorizedUserId } = this.props
    if (!userId) {
      userId = authorizedUserId
      if (!userId)
        this.props.history.push('/login')
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() { return <Profile {...this.props} isOwner={!this.props.match.params.userId} /> }
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
