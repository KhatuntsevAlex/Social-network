import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import s from './ProfileInfo.module.css'
import errorStyle from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({
  profile,
  handleSubmit,
  error,
  isUpdating,
  cancelEditing,
}) => {
  const contacts = Object.keys(profile.contacts)
    .map(contact =>
      <div key={`profileDataForm_${contact}`} className={`${s.contacts} ${s.noMargin}`}>
        <b>{contact}: </b>
        <Field
          name={`contacts.${contact}`}
          component={Input}
          type="text"
          placeholder={contact}
        />
      </div>
    )
  return <>
    <form onSubmit={handleSubmit} className={s.profileDataForm}>
      {<div>
        <strong>Full name: </strong>
        <Field
          name="fullName"
          component={Input}
          type="text"
          placeholder="Name"
        />
      </div>}
      {<div>
        <b>Обо мне: </b>
        <Field
          name="aboutMe"
          component={Textarea}
          type="text"
          placeholder="Your skills"
        />
      </div>}
      {<div>
        <b>Ищу ли работу?: </b>
        <Field
          id="lookingForAJob"
          name="lookingForAJob"
          component={Input}
          type="checkbox"
        />
      </div>}
      {<div>
        <b>Навыки: </b>
        <Field
          name="lookingForAJobDescription"
          component={Textarea}
          type="text"
          placeholder="Describe the dream job"
        />
      </div>}
      <b>Contacts:</b>
      {contacts}
      <button type="submit" disabled={isUpdating}>Save</button>
      <button type="button" disabled={isUpdating} onClick={cancelEditing}>Cancel</button>
    </form>
    {error && <><div className={errorStyle.formSummaryError}>{error.map(item => <div>{item}</div>)}</div></>}
  </>
}

export default reduxForm({ form: 'profileData' })(ProfileDataForm)
