const ADD_POST = 'ADD-POST';
const DELL_POST = 'DELL-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myProfile: {
        id: 1,
        name: 'Саша',
        likesCount: 0,
        description: '',
        profImgSrc: 'https://21foto.ru/wp-content/uploads/2015/11/20080511_3449-Panorama.jpg',
        avaSrc: 'http://i.ru-phone.org/userfiles/walls/108/1086374/vxrafhkv.jpg',
    },

    posts: [
        { id: 1, message: 'Hello!', likesCount: 15, imgSrc: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg" },
        { id: 2, message: "It's my world!", likesCount: 30, imgSrc: "https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg" },
        { id: 3, message: "It's my world!", likesCount: 30, imgSrc: "http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" },
        { id: 4, message: "It's my world!", likesCount: 30, imgSrc: "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" }
    ],

    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            let newPostId = state.posts.length + 1;
            let newText = state.newPostText;
            return {
                ...state,
                newPostText: "",                
                posts: [
                    ...state.posts,
                    {
                        id: newPostId,
                        message: newText,
                        likesCount: 0,
                        imgSrc: ''
                    }
                ]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case DELL_POST:
            stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            //let postIndex = stateCopy.posts.map(e=>e.id).indexOf(action.messageId);
            //или
            let postIndex = stateCopy.posts.findIndex(message => message.id === action.messageId);
            stateCopy.posts.splice(postIndex, 1);
            return stateCopy;
        default:
            return state;
    };
};
/* export const addPostActionCreator = () => {
  return {type: ADD_POST}  
}; */

//если ф-я просто возвращает что-то, то можна писать без ретурна но обернуть в ():

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText });

export const dellPostActionCreator = (messageId) =>
    ({ type: DELL_POST, messageId });

export default profileReducer;