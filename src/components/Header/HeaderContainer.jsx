import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getAuthUserData } from '../../redux/auth-reduser'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = state => ({
  login: state.auth.login,
  userId: state.auth.id,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = { getAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(HeaderContainer)
