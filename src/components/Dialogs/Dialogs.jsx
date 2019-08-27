import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import MessageForm from './Message/MessageForm'

const Dialogs = ({
  dialogsPage: { dialogs, messages },
  sendMessage,
}) => {

  const dialogsElemets = dialogs.map(d => (
    <DialogItem key={d.id} id={d.id} name={d.name} avaSrc={d.avaSrc} />
  ))

  const messageElements = messages.map(m => (
    <Message key={m.id} id={m.id} message={m.message} />
  ))

  const onSubmit = ({ message }) => {
    sendMessage(message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <MessageForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Dialogs
