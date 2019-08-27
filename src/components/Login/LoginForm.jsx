import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLength, minLength } from '../../utils/validators/validators'

const maxLength20 = maxLength(20)
const minLength8 = minLength(8)

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="email"
        component={Input}
        type="email"
        placeholder="Email"
        validate={[required, maxLength20]} />
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
        name="rememberMe"
        component={Input}
        type="checkbox" /> remember me
        </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>

)
export default reduxForm({ form: 'login' })(LoginForm)
