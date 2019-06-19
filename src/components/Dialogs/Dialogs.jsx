import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsPage = props.dialogsPage;

    let dialogsElemets = dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} id={d.id} name={d.name} avaSrc={d.avaSrc} />
    );

    let messageElements = dialogsPage.messages.map(m =>
        <Message key={m.id} id={m.id} message={m.message} dispatch={props.dispatch} />
    );

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div className={s.newMessage}>
                    <div class="md-form">
                        <textarea
                            id="form10"
                            class="md-textarea form-control"
                            rows="3"
                            onChange={onNewMessageChange}
                            type="text"
                            value={props.dialogsPage.newMessageText}
                            placeholder="Введите сообщение"
                            required
                        />
                        <label for="form10"></label>
                    </div>
                    <div>
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={onSendMessageClick}
                        >
                            Отправить сообщение
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;