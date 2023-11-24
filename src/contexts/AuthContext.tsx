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
    receiverId: string
    setReceiverId: Dispatch<SetStateAction<string>>;
    connectedUsers: string[];
    setConnectedUsers: Dispatch<SetStateAction<string[]>>;
    userConnected: boolean;
    setUserConnected: Dispatch<SetStateAction<boolean>>;
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
    receiverId: "",
    setReceiverId: () => { },
    connectedUsers: [],
    setConnectedUsers: () => { },
    userConnected: false,
    setUserConnected: ( ) => { },
};

export const AuthContext = createContext < AuthContextProps > (defaultAuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState < boolean > (false);
    const [user, setUser] = useState < any > (undefined);
    const [userEmail, setUserEmail] = useState < string > ("");
    const [userId, setUserId] = useState < number | null > (null);
    const [receiverId, setReceiverId] = useState<string>("");
    const [ connectedUsers, setConnectedUsers ] = useState<string[]>([]);
    const [ userConnected, setUserConnected ] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{ loggedIn, setLoggedIn, user, setUser, userEmail, setUserEmail, userId, setUserId, receiverId, setReceiverId, 
                connectedUsers, setConnectedUsers, userConnected, setUserConnected }}
        >
            {children}
        </AuthContext.Provider>
    );
};
