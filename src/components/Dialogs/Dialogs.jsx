import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsPage = props.dialogsPage;

    let dialogsElemets = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avaSrc={d.avaSrc} />);
    //метод .map() будет вызывать по порядку элементы из dialogs пока те не закончатся

    let messageElements = dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} dispatch={props.dispatch} />);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value; //e - event, e.target - event объекта, в котором вызвалась данная функция
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
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={props.dialogsPage.newMessageText}
                            type="text"
                            placeholder="Введите сообщение"
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;