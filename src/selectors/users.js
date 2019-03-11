export const getAllUsers = state => state.users.users;

export const getCurrentUser = (state, id) => getAllUsers(state).filter(user => user.id === Number(id))[0];

export const getRegisterName = state => state.users.register.name;

export const getRegisterUsername = state => state.users.register.username;

export const getRegisterWebsite = state => state.users.register.website;

export const getRegisterEmail = state => state.users.register.email;
