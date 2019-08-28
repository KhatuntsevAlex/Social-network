import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import musicReducer from './music-reducer'
import authReduser from './auth-reduser'
import appReduser from './app-reduser'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
