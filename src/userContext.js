import * as React from 'react';

export const user = {
    email: '',
    first: '',
    last: '',
    password: '',
    isLogged: false,
};

const UserContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'signin': {
    //   console.log('DISPATCH: payload:', action.payload, 'state:', state);
    //   const {email: inputEmail, password: inputPassword} = action.payload;
    //   const {email, password} = state.user;
    //   const isValid = email === inputEmail && password === inputPassword;
      return { user: {...state.user, ...action.payload} }
    }
    case 'signup': {
      return { user: action.payload }
    }
    case 'logout': {
      return { user: {} }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function UserProvider({children}) {
  const [state, dispatch] = React.useReducer(userReducer, user);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => React.useContext(UserContext);
