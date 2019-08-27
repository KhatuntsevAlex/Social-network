import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../redux/auth-reduser'

const Login = (props) => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.login(email, password, rememberMe)
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

export default connect(null, { login })(Login)