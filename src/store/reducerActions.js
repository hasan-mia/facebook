import actions from "./actions";
const initState = {
    users: [],

};

const reducerActions = (state = initState, action) => {
    switch (action.type) {
        
        case actions.SET_USERS:
            return {
                ...state,
                users: action.users,
            };

            default:
            return state;
    }
}
        
export default reducerActions;