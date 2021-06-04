import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import listsReducer from './reducers/listsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const users = () => []

const reducer = combineReducers({
  users
})

const store = createStore(listsReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render( 
  <Provider store ={store}> 
    <App />
  </Provider>
 
  ,

  document.getElementById('root')
);


