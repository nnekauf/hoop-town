import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import listsReducer from './reducers/listsReducer'
import usersReducer from './reducers/usersReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

// const initialState = {lists: []}

const combinedReducer = combineReducers({
  lists: listsReducer, 
  users: usersReducer
})

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))



ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);