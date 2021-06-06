import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import tournamentsReducer from './reducers/tournamentsReducer'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


// const initialState = {lists: []}

const combinedReducer = combineReducers({
  tournaments: tournamentsReducer, 
  users: usersReducer,
  currentUser,
  loginForm,
  signupForm
})

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))


export default store