import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'        // Allows our browser to cache and store

// import thunk from 'redux-thunk'             // Asynch event handling and fires multiple actions
// const middlewares = [thunk]        // this is the middlewre logger. Useful for debugging

import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]


// Set the logger ONLY on dev. Does not show up in Prod Env
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

// Spread all array values in middleware as individual arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// This is where all the saga run
// We use root saga because we may have multiple sagas to execute
sagaMiddleware.run(rootSaga)

// This is a persisted verion of our store
// Why do we need this ? So that it saves whatever is our checkout when we refresh or restart 
export const persistor = persistStore(store)

export default {store, persistor}; 