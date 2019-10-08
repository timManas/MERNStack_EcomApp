// Represents all the state of our application
// Combines all the states together

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

import { persistReducer } from 'redux-persist'      // We also want the reducer to be persistent
import storage from 'redux-persist/lib/storage'     // This is the mobile storage. Telling Redux that i want to use local storage as default storage

import directoryReducer from './directory/directory.reducer'

const persistConfig = {
    key:'root',
    storage,
    whiteList: ['cart']         // This is the only thing we want to store.. Note 'cart' is the only reducer we want to add from below
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)