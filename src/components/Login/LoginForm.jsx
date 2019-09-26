import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLength, minLength } from '../../utils/validators/validators'
import { resetForm } from '../../utils/helpers/resetFormAfterSubmit'
import s from '../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLength(30)
const maxLength8 = maxLength(8)
const minLength8 = minLength(8)

const LoginForm = ({ handleSubmit, error, captchaUrl, onRefreshCaptcha }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="email"
        component={Input}
        type="email"
        placeholder="Email"
        validate={[required, maxLength30]} />
    </div>
    <div>
      <Field
        name="password"
        component={Input}
        type="password"
        placeholder="Password"
        validate={[required, minLength8]} />
    </div>
    <div>
      <Field
        id="rememberMe"
        name="rememberMe"
        component={Input}
        type="checkbox" /> remember me
        </div>
    {captchaUrl && <>
      <img src={captchaUrl} alt="captcha" />
      <button type="button" onClick={onRefreshCaptcha}>Refresh</button>
      <div>
        <Field
          name="captcha"
          component={Input}
          type="text"
          placeholder="Enter simbols"
          validate={[required, maxLength8]} />
      </div>
    </>
    }
    {error && <div className={s.formSummaryError}>{error}</div>}
    <div>
      <button type="submit">Login</button>
    </div>
  </form>

)
export default reduxForm({ form: 'login', onSubmitSuccess: resetForm('login') })(LoginForm)
