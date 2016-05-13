import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import {Router, Route, Link, browserHistory } from 'react-router';
import ChatStore from '../stores/ChatStore';

function onEnter(nextState, replace) {
    var state = ChatStore.getState();
    if (!state.user) {
        replace('/login');
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Chat} />
            <Route path="chat" component={Chat} onEnter={onEnter}>
                <Route path=":channel" component={Chat} />
            </Route>
            
            <Route path="login" component={Login} />
        </Route>
    </Router>,
    document.getElementById('container'));
