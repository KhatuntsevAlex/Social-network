import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import musicReducer from './music-reducer'
import authReduser from './auth-reduser'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReduser,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
