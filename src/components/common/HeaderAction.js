// actions.js
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  // Add other action creators as needed
  