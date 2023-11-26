import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import Chats from "../components/Chats/Chats";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ChatPage = () => {

    const isMobileScreen = () => window.innerWidth <= 647;

    const { cloudinaryWidgetLoading } = useContext(ThemeContext);
    
    return (
        <>

            {cloudinaryWidgetLoading &&
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <span className="loading loading-spinner loading-lg text-info"></span>
                </div>
            }

            {isMobileScreen() ? (
                <>
                    <div className="hidden">
                        <Header message="Hii" />
                    </div>

                    <div className={`${cloudinaryWidgetLoading && "opacity-50 pointer-events-none"}`}>
                        <Chats />
                    </div>
                </>
            ) : (
                <div className={`md:flex md:flex-row ${cloudinaryWidgetLoading && "opacity-50 pointer-events-none"}`}>
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