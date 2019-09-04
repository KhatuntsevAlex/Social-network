import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Message.module.css'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLength } from '../../../utils/validators/validators'
import { resetForm } from '../../../utils/helpers/resetFormAfterSubmit'

const maxLength20 = maxLength(20)

const MessageForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className={s.newMessage}>
    <div className="md-form">
      <Field
        name="message"
        component={Textarea}
        className="md-textarea form-control mb-3"
        type="text"
        placeholder="Введите сообщение"
        validate={[required, maxLength20]}
      />
    </div>
    <div>
      <button
        className="btn btn-success"
        type="submit"
      >
        Отправить
      </button>
    </div>
  </form>
)



export default reduxForm({ form: 'message', onSubmitSuccess: resetForm('message') })(MessageForm)
