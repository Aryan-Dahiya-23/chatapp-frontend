import { useContext } from "react";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import People from "../components/People/People";
import EmptyModal from "../components/UI/EmptyModal";
import { ThemeContext } from "../contexts/ThemeContext";

const PeoplePage = () => {

    const { logoutLoading } = useContext(ThemeContext);

    return (
        <>
            {logoutLoading &&
                <div className="fixed top-1/2 left-1/2 z-50">
                    <span className="loading loading-spinner loading-lg text-info"></span>
                </div>
            }

            <div className={`md:flex md:flex-row ${logoutLoading && "opacity-70"}`}>
                <DesktopNavigation />
                <MobileNavigation />
                <People />
                <EmptyModal />
            </div>
        </>
    )
}

export default PeoplePage;