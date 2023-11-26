// AuthContext.tsx
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface ThemeContextProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    chatHeight: boolean;
    setChatHeight: Dispatch<SetStateAction<boolean>>;
    groupChatWidget: boolean;
    setGroupChatWidget: Dispatch<SetStateAction<boolean>>;
    logoutLoading: boolean;
    setLogoutLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultThemeContext: ThemeContextProps = {
    theme: "",
    setTheme: () => { },
    chatHeight: false,
    setChatHeight: () => { },
    groupChatWidget: false,
    setGroupChatWidget: () => { },
    logoutLoading: false,
    setLogoutLoading: () => { }
};

export const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme !== null ? savedTheme : "light";
    });
    const [chatHeight, setChatHeight] = useState<boolean>(false);
    const [groupChatWidget, setGroupChatWidget] = useState<boolean>(false)
    const [logoutLoading, setLogoutLoading] = useState<boolean>(false)

    useEffect(() => {
        try {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");

            if (localTheme !== null) {
                document.querySelector("html")?.setAttribute("data-theme", localTheme);
            } else {
                document.querySelector("html")?.setAttribute("data-theme", "light");
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
        }

    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, chatHeight, setChatHeight, groupChatWidget, setGroupChatWidget, logoutLoading, setLogoutLoading }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
