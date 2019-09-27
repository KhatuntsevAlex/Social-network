import React, { lazy, Suspense } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reduser'
import Preloader from './components/common/Preloader/Preloader'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MusicContainer = lazy(() => import('./components/Music/MusicContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Settings = lazy(() => import('./components/Settings/Settings'))
const News = lazy(() => import('./components/News/News'))

class App extends React.Component {

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    // eslint-disable-next-line react/destructuring-assignment    
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  // Перехватчик неперехваченных ошибок
  catchAllUnhandledErrors = ({ reason, promise }) => {
    alert('Some error occured')
    console.log(reason)
  }

  render() {
    const { initialized } = this.props
    if (!initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/profile" />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/music" render={() => <MusicContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route render={() => <div>404 NOT FOUND</div>} />
            </Switch>
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
