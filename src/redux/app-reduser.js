import { getAuthUserData } from './auth-reduser'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
  initialized: false,  
}

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized:true,
      }
    default:
      return state
  }
}

export default appReduser

export const initializedSuccess = () => (
  { type: INITIALIZED_SUCCESS }
)

export const initializeApp = () => dispatch => {
  const promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
}
