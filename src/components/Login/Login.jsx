import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import { login, getCaptchaUrl } from '../../redux/auth-reduser'

const Login = ({ isAuth, captchaUrl, ...funcs }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    funcs.login(email, password, rememberMe, captcha)
  }

  const onRefreshCaptcha = () => {
    funcs.getCaptchaUrl()
  }

  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h1>
        {'Login'}
      </h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} onRefreshCaptcha={onRefreshCaptcha} />
    </div>
  )
}
const mapStateToProps = ({ auth: { isAuth, captchaUrl } }) => ({
  isAuth,
  captchaUrl,
})

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login)