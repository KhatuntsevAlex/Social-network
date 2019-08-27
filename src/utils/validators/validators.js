export const required = value => value ? undefined : 'Required'

export const maxLength = max => value => value && value.length > max ? `Max length is ${max} symbols` : undefined

export const minLength = min => value => value && value.length < min ? `Min length is ${min} symbols` : undefined

