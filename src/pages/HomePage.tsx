import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import EmptyModal from "../components/UI/EmptyModal";

const HomePage = () => {

    // const isMobileScreen = () => window.innerWidth <= 647;

    return (

        <div className="md:flex md:flex-row">
            <DesktopNavigation />
            <MobileNavigation />
            <Users />
            <EmptyModal />
        </div>

    )
}

export default HomePage;