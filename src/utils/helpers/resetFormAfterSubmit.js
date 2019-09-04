import { reset } from 'redux-form'

// eslint-disable-next-line import/prefer-default-export
export const resetForm = formName => (result, dispatch) => dispatch(reset(formName))