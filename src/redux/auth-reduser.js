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

// eslint-disable-next-line consistent-return
export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    return dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe)  
    if (data.resultCode === 0) {      
      dispatch(getAuthUserData())
    } else {
      const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Wrong Email or Password'
      dispatch(stopSubmit('login', {_error: errorMessage}))
    } 
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout()  
    if (data.resultCode === 0) {      
      dispatch(setAuthUserData(null, null, null, false))
    } 
}
