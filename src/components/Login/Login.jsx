import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import { login } from '../../redux/auth-reduser'

const Login = ({ isAuth, ...funcs }) => {
  const onSubmit = ({ email, password, rememberMe }) => {
    funcs.login(email, password, rememberMe)
  }

  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h1>
        {'Login'}
      </h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)