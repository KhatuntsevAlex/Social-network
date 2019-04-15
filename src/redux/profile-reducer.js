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
    switch (action.type) {
        case ADD_POST: {
            let newPostId = state.posts.length + 1;
            let newPost = {
                id: newPostId,
                message: state.newPostText,
                likesCount: 0,
                imgSrc: ''
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case DELL_POST: {
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            let postIndex = stateCopy.posts.indexOf(action.messageId);
            stateCopy.posts.splice(postIndex, 1);
            return stateCopy;
        }
        default:
            return state;
    };
};
/* export const addPostActionCreator = () => {
  return {type: ADD_POST}  
}; */

//если ф-я просто возвращает что-то, то можна писать без ретурна но обернуть в ():

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const dellPostActionCreator = (id) =>
    ({ type: DELL_POST, messageId: id });

export default profileReducer;