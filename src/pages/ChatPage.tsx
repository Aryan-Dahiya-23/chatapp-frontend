import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import Chats from "../components/Chats/Chats";
import Header from "../components/Header/Header";

const ChatPage = () => {

    const isMobileScreen = () => window.innerWidth <= 647;

    return (
        <>

            {isMobileScreen() ? (
                <>
                    <div className="hidden">
                        <Header message="Hii" />
                    </div>

                    <Chats />
                </>
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