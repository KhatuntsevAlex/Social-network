import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
  const { id, message } = props
  return <div id={id} className={s.message}>{message}</div>
}
export default Message
