import {stopSubmit} from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
}

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
)

export const setCaptchaUrl = (captchaUrl) => (
  { type: SET_CAPTCHA_URL, payload: { captchaUrl } }
)

// eslint-disable-next-line consistent-return
export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    return dispatch(setAuthUserData(id, email, login, true))
  }
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout()  
    if (data.resultCode === 0) {      
      dispatch(setAuthUserData(null, null, null, false))
      dispatch(setAuthUserData(null, null, null, false))
    } 
}

export const getCaptchaUrl = () => async (dispatch) => {
  const {url} = await securityAPI.getCaptchaUrl()     
    return dispatch(setCaptchaUrl(url))  
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)  
    if (data.resultCode === 0) {     
      // SUCCESS, GET AUTH DATA
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Wrong Email or Password'
      dispatch(stopSubmit('login', {_error: errorMessage}))
    } 
}

export default authReduser