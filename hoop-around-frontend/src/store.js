import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import listsReducer from './reducers/listsReducer'
import usersReducer from './reducers/usersReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


// const initialState = {lists: []}

const combinedReducer = combineReducers({
  lists: listsReducer, 
  users: usersReducer
})

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))


export default store