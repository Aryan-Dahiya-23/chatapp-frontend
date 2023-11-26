import { useContext } from "react";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import EmptyModal from "../components/UI/EmptyModal";
import { ThemeContext } from "../contexts/ThemeContext";
import GroupChatWidget from "../components/Widgets/GroupChatWidget";

const HomePage = () => {

    const { groupChatWidget } = useContext(ThemeContext);
    const { logoutLoading } = useContext(ThemeContext);

    return (
        <>

            {groupChatWidget && <GroupChatWidget />}

            {logoutLoading &&
                <div className="fixed top-1/2 left-1/2 z-50">
                    <span className="loading loading-spinner loading-lg text-info"></span>
                </div>
            }
            
            <div className={`md:flex md:flex-row ${(groupChatWidget || logoutLoading) && "opacity-70"}`}>
                <DesktopNavigation />
                <MobileNavigation />
                <Users />
                <EmptyModal />
            </div>
        </>
    )
}

export default HomePage;