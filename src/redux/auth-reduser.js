import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export default authReduser;

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data:{id, email, login} });

export const getAuthUserData = () => dispatch => {
  usersAPI.me().then(data => {
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
    }
});
}
