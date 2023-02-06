import { createStore } from 'redux';
import { reducers } from './reducers/Reducers';
import { reducers2 } from './reducers/Reducers2';
import { addressReducer } from './reducers/AddressReducers'
import { orderReducer } from './reducers/OrderReducer'
import { combineReducers } from 'redux';


const routeReducer = combineReducers({ reducers, reducers2, addressReducer, orderReducer })


const store = createStore(routeReducer)

export default store