import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { resetForm } from '../../../utils/helpers/resetFormAfterSubmit'

const maxLength30 = maxLength(30)

const PostForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="md-form">
      <Field
        name="text"
        component={Textarea}
        className="md-textarea form-control mb-3"
        type="text"
        placeholder="Введите текст"
        validate={[required, maxLength30]}
      />
    </div>
    <div>
      <button
        className="btn btn-success"
        type="submit"
      >
        {'Добавить пост'}
      </button>
    </div>
  </form>
)

export default reduxForm({ form: 'post', onSubmitSuccess: resetForm('post') })(PostForm)
