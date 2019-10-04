import {  UserActionTypes } from './user.types'

// Functions which return objects
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})