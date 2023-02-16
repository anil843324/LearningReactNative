import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskReducer } from './reducers';
import thunk from 'redux-thunk'
const routeReducer = combineReducers({ taskReducer })


export const store = createStore(routeReducer, applyMiddleware(thunk))




