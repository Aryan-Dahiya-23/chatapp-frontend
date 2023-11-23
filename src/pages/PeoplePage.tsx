import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import People from "../components/People/People";
import EmptyModal from "../components/UI/EmptyModal";

const PeoplePage = () => {

    return (
        <div className="md:flex md:flex-row">
            <DesktopNavigation />
            <MobileNavigation />    
            <People />
            <EmptyModal />
        </div>

    )
}

export default PeoplePage;