import {stopSubmit} from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default authReduser

export const setAuthUserData = (id, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
)

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {      
      dispatch(getAuthUserData())
    } else {
      const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Wrong Email or Password'
      dispatch(stopSubmit('login', {_error: errorMessage}))
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {      
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}
