import React, { lazy, Suspense } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import Header from './components/Header/Header'
/* import News from './components/News/News'
import Settings from './components/Settings/Settings' */
/* import DialogsContainer from './components/Dialogs/DialogsContainer'
 */
import NavbarContainer from './components/Navbar/NavbarContainer'
/* import UsersContainer from './components/Users/UsersContainer'
 */
/* import MusicContainer from './components/Music/MusicContainer'
 */
/* import ProfileContainer from './components/Profile/ProfileContainer'
 */
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reduser'
import Preloader from './components/common/Preloader/Preloader'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MusicContainer = lazy(() => import('./components/Music/MusicContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Settings = lazy(() => import('./components/Settings/Settings'))
const News = lazy(() => import('./components/News/News'))

/* Для перехода между частями своего
  приложения заключаем весь ретурн
  в <BrowserRouter></BrowserRouter>,
  а внутри тег
<Route path="куда ведет ссылка" component={что отображать}/> */

/* чтоб работало нужно установить router в папку
  с приложением через node.js command prompt:
  npm i react-router-dom -save
  и потом прописать импорты - смотр1и вверху */

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.initializeApp()
  }

  render() {
    const { initialized } = this.props
    if (!initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          {/* <Redirect to="/profile" /> */}
          <Suspense fallback={<Preloader />}>
            <Route exact path="/" render={() => <ProfileContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" render={() => <MusicContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
          </Suspense>
          <Route path="/login" render={() => <Login />} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }, null, { pure: false })
)(App)
