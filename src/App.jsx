import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import Header from './components/Header/Header'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import MusicContainer from './components/Music/MusicContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reduser'
import Preloader from './components/common/Preloader/Preloader'

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
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          {/* <Redirect to="/profile" /> */}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={() => <MusicContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
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
