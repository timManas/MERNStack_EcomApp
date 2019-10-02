// Represents all the state of our application
// Combines all the states together

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})