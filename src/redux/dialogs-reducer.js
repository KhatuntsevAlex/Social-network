const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

    dialogs: [
        { id: 1, name: 'Саша', avaSrc: 'http://i.ru-phone.org/userfiles/walls/108/1086374/vxrafhkv.jpg' },
        { id: 2, name: 'Юра', avaSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' },
        { id: 3, name: 'Ира', avaSrc: 'http://hypeava.ru/uploads/posts/2018-01/1514892492_1.jpg' },
        { id: 4, name: 'Таня', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1460128624_youloveit_ru_ledi_bag_i_super_kot_krasivye_lica_avatarki13.png' },
        { id: 5, name: 'Валя', avaSrc: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' },
        { id: 6, name: 'Виталик', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1426228433_iv6tzpo0bia.jpg' }
    ],

    messages: [
        { id: 1, message: 'Hello World!', imgSrc: '' },
        { id: 2, message: 'My name is Alex', imgSrc: '' },
        { id: 3, message: "I'm learning react.js", imgSrc: '' },
        { id: 4, message: "I'm learning react.js", imgSrc: '' },
        { id: 5, message: "I'm learning react.js", imgSrc: '' },
        { id: 6, message: "I'm learning react.js", imgSrc: '' }
    ],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageId = state.messages.length + 1;
            let newMessage = {
                id: newMessageId,
                message: state.newMessageText,
                imgSrc: ''
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return { ...state };
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return { ...state };
        default:
            return { ...state };
    };
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;