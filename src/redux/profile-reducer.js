import {stopSubmit} from 'redux-form'
import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELL_POST = 'DELL_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTOS = 'SET_PHOTOS'

const initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message: 'Hello!',
      likesCount: 15,
      imgSrc: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg',
    },
    {
      id: 2,
      message: "It's my world!",
      likesCount: 30,
      imgSrc: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg',
    },
    {
      id: 3,
      message: "It's my world!",
      likesCount: 30,
      imgSrc: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg',
    },
    {
      id: 4,
      message: "It's my world!",
      likesCount: 30,
      imgSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg',
    },
  ],

  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPostId = state.posts.length + 1
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: newPostId,
            message: action.text,
            likesCount: 0,
            imgSrc: '',
          },
        ],
      }
    }    
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case SET_PHOTOS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      }
    case DELL_POST:       
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.messageId),      
    }
    default:
      return state
  }
}

export default profileReducer

export const addPost = (text) => ({ type: ADD_POST, text })

export const dellPost = messageId => ({ type: DELL_POST, messageId })

const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

const setStatus = status => ({ type: SET_STATUS, status })

const setPhotos = photos => ({ type: SET_PHOTOS, photos })

export const getUserProfile = id => async (dispatch) => {
  const data = await profileAPI.getUserProfile(id)
      dispatch(setUserProfile(data))    
}

export const getStatus = id => async (dispatch) => {
  const data = await profileAPI.getStatus(id)    
      dispatch(setStatus(data))    
}

export const updateStatus = status => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)    
      if(data.resultCode === 0)
      dispatch(setStatus(status))    
}

export const updatePhoto = photo => async (dispatch) => {
  const data = await profileAPI.updatePhoto(photo)
      if(data.resultCode === 0)
      dispatch(setPhotos(data.data.photos))  
}

export const updateInfo = infoData => async (dispatch, getState) => {
  const {id} = getState().auth
  const data = await profileAPI.updateInfo(infoData)
    if(data.resultCode === 0){
      return dispatch(getUserProfile(id)) 
    }
      /* const fieldReg = /\>([^&]*)\)/
const errorReg = /([^&]*)\s\(/ */
      const errorMessage = data.messages.length > 0 ? data.messages : 'Wrong field'
      dispatch(stopSubmit('profile', {_error: errorMessage}))
    
}