import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import listsReducer from './reducers/listsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {lists: []}
const store = createStore(listsReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);