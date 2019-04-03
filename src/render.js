import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, dellPost, updateNewPostText } from './redux/store';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         dellPost={dellPost}
                         updateNewPostText={updateNewPostText}/>,
                    document.getElementById('root'));
};









