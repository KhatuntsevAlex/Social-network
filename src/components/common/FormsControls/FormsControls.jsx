import React from 'react'
import s from './FormsControls.module.css'

const FormControl = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = error && touched
  return (
    <div className={`${s.formControl} ${hasError && s.error}`}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}>
    <input {...input} {...restProps} />
    {restProps.id && restProps.type === 'checkbox' && <label htmlFor={restProps.id} />}
  </FormControl>
}
