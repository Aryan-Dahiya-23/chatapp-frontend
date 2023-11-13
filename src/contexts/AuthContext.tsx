/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthContext.tsx
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextProps {
    loggedIn: boolean;
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
    userEmail: string;
    setUserEmail: Dispatch<SetStateAction<string>>;
    userId: number | null;
    setUserId: Dispatch<SetStateAction<number | null>>;
}

const defaultAuthContext: AuthContextProps = {
    loggedIn: false,
    setLoggedIn: () => { },
    user: undefined,
    setUser: () => { },
    userEmail: "",
    setUserEmail: () => { },
    userId: null,
    setUserId: () => { },
};

export const AuthContext = createContext < AuthContextProps > (defaultAuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState < boolean > (false);
    const [user, setUser] = useState < any > (undefined);
    const [userEmail, setUserEmail] = useState < string > ("");
    const [userId, setUserId] = useState < number | null > (null);

    return (
        <AuthContext.Provider
            value={{ loggedIn, setLoggedIn, user, setUser, userEmail, setUserEmail, userId, setUserId }}
        >
            {children}
        </AuthContext.Provider>
    );
};
