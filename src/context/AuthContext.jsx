import { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from 'firebase/config';

export const AuthContext = createContext();

const initialState = {
  user: null,
  authIsReady: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
