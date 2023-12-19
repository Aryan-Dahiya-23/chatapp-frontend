import { useContext } from "react";
import OfflineAvatar from "../Avatar/OfflineAvatar";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

interface IncomingVideoCallProps {
    name: string;
    avatarSrc: string;
    id: string;
}

const IncomingVideoCallWidget: React.FC<IncomingVideoCallProps> = ({ name, avatarSrc, id }) => {

    const navigate = useNavigate();

    const { setIncomingVideoCall } = useContext(ThemeContext);

    const navigateToCall = () => {
        navigate(`/room/${id}`);
    }

    return (
        <div className="flex flex-row space-x-4 p-4 fixed z-[9999] w-full md:left-[40%] border border-black md:w-20">

            <div className="avatar">
                <div className="w-16 rounded-full">
                    <img src={avatarSrc} alt="profile" />
                </div>
            </div>

            <div className="flex flex-col">
                <span>{name}</span>
                <span>Incoming video call</span>
                <div className="flex flex-row">

                </div>
            </div>
        </div>
    )
}

export default IncomingVideoCallWidget;