import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

const store = {
  _state: {
    profilePage: {
      myProfile: {
        id: 1,
        name: 'Саша',
        likesCount: 0,
        description: '',
        profImgSrc: 'https://21foto.ru/wp-content/uploads/2015/11/20080511_3449-Panorama.jpg',
        avaSrc: 'http://i.ru-phone.org/userfiles/walls/108/1086374/vxrafhkv.jpg',
      },

      posts: [
        {
          id: 1, message: 'Hello!', likesCount: 15, imgSrc: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg',
        },
        {
          id: 2, message: "It's my world!", likesCount: 30, imgSrc: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg',
        },
        {
          id: 3, message: "It's my world!", likesCount: 30, imgSrc: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg',
        },
        {
          id: 4, message: "It's my world!", likesCount: 30, imgSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg',
        },
      ],

      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Саша', avaSrc: 'http://i.ru-phone.org/userfiles/walls/108/1086374/vxrafhkv.jpg' },
        { id: 2, name: 'Юра', avaSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' },
        { id: 3, name: 'Ира', avaSrc: 'http://hypeava.ru/uploads/posts/2018-01/1514892492_1.jpg' },
        { id: 4, name: 'Таня', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1460128624_youloveit_ru_ledi_bag_i_super_kot_krasivye_lica_avatarki13.png' },
        { id: 5, name: 'Валя', avaSrc: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' },
        { id: 6, name: 'Виталик', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1426228433_iv6tzpo0bia.jpg' },
      ],

      messages: [
        { id: 1, message: 'Hello World!', imgSrc: '' },
        { id: 2, message: 'My name is Alex', imgSrc: '' },
        { id: 3, message: "I'm learning react.js", imgSrc: '' },
        { id: 4, message: "I'm learning react.js", imgSrc: '' },
        { id: 5, message: "I'm learning react.js", imgSrc: '' },
        { id: 6, message: "I'm learning react.js", imgSrc: '' },
      ],

      newMessageText: '',
    },

    sidebar: {
      navItems: [
        { name: 'Profile', linkTo: '/profile', imgSrc: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326502profle.png' },
        { name: 'Messages', linkTo: '/dialogs', imgSrc: 'http://s1.iconbird.com/ico/2013/9/452/w512h3361380476923mail.png' },
        { name: 'News', linkTo: '/news', imgSrc: 'https://previews.123rf.com/images/bryljaev/bryljaev1303/bryljaev130300006/18307781-newspaper-icon.jpg' },
        { name: 'Music', linkTo: '/music', imgSrc: 'http://s1.iconbird.com/ico/2013/9/446/w512h5121380376577FlurryGoogleMusic.png' },
        { name: 'Settings', linkTo: '/settings', imgSrc: 'https://www.iconsearch.ru/uploads/icons/humano2/128x128/cog-icon-2-48x48.png' },
      ],
      myFriends: [
        { id: 2, name: 'Юра', avaSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' },
        { id: 3, name: 'Ира', avaSrc: 'http://hypeava.ru/uploads/posts/2018-01/1514892492_1.jpg' },
        { id: 4, name: 'Таня', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1460128624_youloveit_ru_ledi_bag_i_super_kot_krasivye_lica_avatarki13.png' },
      ],
    },
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer // наблюдатель //
  },

  dispatch(action) { // action = объект, а значит должно иметь type: 'ADD-POST'
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },
}

export default store
