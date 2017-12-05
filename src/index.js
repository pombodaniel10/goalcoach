import React from 'react';
import ReactDOM from 'react-dom';

import { firebaseApp } from './firebase'
import history from './history'

import { Router, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import {logUser} from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
    const {email} = user;
    store.dispatch(logUser(email));
    history.push("/app");
  } else {
    history.replace("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} path="/">
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
