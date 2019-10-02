import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]        // this is the middlewre logger. Useful for debugging

// Spread all array values in middleware as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;