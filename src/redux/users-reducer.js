import usersAPI from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false }
          return u
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, page: action.page }
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : [state.followingInProgress.filter(id => id !== action.id)],
      }
    default:
      return state
  }
}
export default usersReducer

export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page,
})
export const setTotalCount = totalCount => ({
  type: SET_TOTAL_COUNT,
  totalCount,
})
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const toggleFollowingProgress = (followingInProgress, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  id,
})

export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const data = await usersAPI.getUsers(page, pageSize)  
    if (!data.error) {
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
    }
    dispatch(toggleIsFetching(false))  
}

export const unfollow = id => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  const data = await usersAPI.unfollow(id)  
    if (data.resultCode === 0) dispatch(unfollowSuccess(id))
    dispatch(toggleFollowingProgress(false, id))  
}

export const follow = id => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  const data = await usersAPI.follow(id) 
    if (data.resultCode === 0) dispatch(followSuccess(id))
    dispatch(toggleFollowingProgress(false, id))  
}
