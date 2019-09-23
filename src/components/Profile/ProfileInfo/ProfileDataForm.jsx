import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import { resetForm } from '../../../utils/helpers/resetFormAfterSubmit'
import s from './ProfileInfo.module.css'
import errorStyle from '../../Login/Login.module.css'

const ProfileDataForm = ({
  profile,
  handleSubmit,
  error,
  isUpdating,
}) => {
  const contacts = Object.keys(profile.contacts)
    .map(key => <div>
      <b>{key}: </b>
      <Field
        key={`profileDataForm_${key}`}
        name={`contacts.${key}`}
        component={Input}
        type="text"
        placeholder={key}
      />
    </div>)
  return (
    <form onSubmit={handleSubmit} className={s.profileDataForm}>
      {<p>
        <strong>Full name: </strong>
        <Field
          name="fullName"
          component={Input}
          type="text"
          placeholder="Name"
        />
      </p>}
      {<p>
        <b>Обо мне: </b>
        <Field
          name="aboutMe"
          component={Textarea}
          type="text"
          placeholder="About me"
        />
      </p>}
      {contacts}
      {<p>
        <b>Работа: </b>
        <Field
          name="lookingForAJobDescription"
          component={Input}
          type="text"
          placeholder="About your work"
        />
      </p>}
      {error && <div className={errorStyle.formSummaryError}>{error.map(item => <div>{item}</div>)}</div>}
      <button type="submit" disabled={isUpdating}>Confirm</button>
    </form>
  )
}

export default reduxForm({ form: 'profile', onSubmitSuccess: resetForm('profile') })(ProfileDataForm)
