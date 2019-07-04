import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = ({
  dialogsPage: { dialogs, messages, newMessageText },
  updateNewMessageText,
  sendMessage }) => {

  const dialogsElemets = dialogs.map(d => (
    <DialogItem key={d.id} id={d.id} name={d.name} avaSrc={d.avaSrc} />
  ))

  const messageElements = messages.map(m => (
    <Message key={m.id} id={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div className={s.newMessage}>
          <div className="md-form">
            <textarea
              id="form10"
              className="md-textarea form-control mb-3"
              rows="3"
              onChange={(e) => {
                updateNewMessageText(e.target.value)
              }}
              type="text"
              value={newMessageText}
              placeholder="Введите сообщение"
              required
            />
          </div>
          <div>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                sendMessage()
              }}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
