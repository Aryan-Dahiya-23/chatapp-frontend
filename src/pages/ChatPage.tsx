/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import Chats from "../components/Chats/Chats";

const ChatPage = () => {

    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme !== null ? savedTheme : "light";
    const [theme, setTheme] = useState<string>(initialTheme);

    const isMobileScreen = () => window.innerWidth <= 647;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");

        if (localTheme !== null) {
            document.querySelector("html")?.setAttribute("data-theme", localTheme);
        } else {
            document.querySelector("html")?.setAttribute("data-theme", "light");
        }
    }, [theme]);

    const handleTheme = (e: { target: { checked: any; }; }) => {
        if (e.target.checked || localStorage.getItem("theme") === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <>
            {isMobileScreen() ? (
                <Chats />
            ) : (
                <div className="md:flex md:flex-row">
                    <DesktopNavigation />
                    <MobileNavigation />
                    <Users />
                    <Chats />
                </div>
            )}
        </>
    );

}

export default ChatPage;