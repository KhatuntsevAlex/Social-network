import React from "react";
import { Route } from "react-router-dom"
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";

{/*Для перехода между частями своего
  приложения заключаем весь ретурн
  в <BrowserRouter></BrowserRouter>,
  а внутри тег
<Route path="куда ведет ссылка" component={что отображать}/>*/}

{/*чтоб работало нужно установить roater в папку
  с приложением через node.js command prompt:
  npm i react-router-dom -save
  и потом прописать импорты - смотри вверху*/
}

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>        
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/music" render={() => <MusicContainer />} />
        <Route path="/news" render={() => <News />} />        
        <Route path="/settings" render={() => <Settings />} />        
      </div>
    </div>
  );
};

export default App;
