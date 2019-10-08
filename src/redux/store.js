import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'        // Allows our browser to cache and store

const middlewares = [logger]        // this is the middlewre logger. Useful for debugging

// Spread all array values in middleware as individual arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// This is a persisted verion of our store
// Why do we need this ? So that it saves whatever is our checkout when we refresh or restart 
export const persistor = persistStore(store)

export default {store, persistor}; 