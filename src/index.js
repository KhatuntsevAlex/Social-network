import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

/* let rerenderEntireTree = () => { */

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
/* }; */

/* rerenderEntireTree(store.getState()); */
//store.subscribe(rerenderEntireTree); - работает и так и так как далее
/* store.subscribe(() => {
    rerenderEntireTree();
}); */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*создали ф-ю rerenderEntireTree (перерисовывает приложение)
и отдали ее внутрь subscribe в store,
где она присваивается функции _callSubscriber,
которая уже вызывается там при addPost или dellPost или updateNewPostText*/