const INITIAL_STATE = {
    currentUser: null
}

// This user gets every single action that gets fired
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':        // 
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state        // If nothing matches, then return state
    }
}

export default userReducer