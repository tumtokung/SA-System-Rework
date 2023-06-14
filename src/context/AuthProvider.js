/* eslint-disable indent */
import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const actionProfile = {
    SET_GOOGLE_USER: 'SET_GOOGLE_USER',
    SIGN_OUT: "SIGN_OUT"
};

const authReducer = (state, action) => {
    switch (action.type) {
        case SET_GOOGLE_USER: {
            return {
                ...state,
                googleUser: action.googleUser
            };
        }
        case SIGN_OUT: {
            return {};
        }
        default:
            return { ...state };
    }
};

function AuthProvider({ children, initialState }) {
    const authInitialState = initialState ?? {};
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    return (
        <AuthContext.Provider value={[authState, authDispatch]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
