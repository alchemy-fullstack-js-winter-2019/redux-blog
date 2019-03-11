export const getAllUsers = state => { 
  return state.users.users;
};

export const getUserById = state => { 
  return state.users.userDetail;
};

export const isLoading = state => state.users.loading;
