const actions = {
    SET_USERS: "SET_USERS",

}

export const setUsers = (users) => {
    return {
        type: actions.SET_USERS,
        users,
    };
};

export default actions;