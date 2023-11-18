import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import People from "../components/People/People";

const PeoplePage = () => {

    return (
        <div className="md:flex md:flex-row">
            <DesktopNavigation />
            <MobileNavigation />    
            <People />
        </div>

    )
}

export default PeoplePage;