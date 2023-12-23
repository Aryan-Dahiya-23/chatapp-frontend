import { useContext, useEffect } from "react";
import RingAvatar from "../Avatar/RingAvatar";
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

    const acceptCall = () => {
        navigate(`/room/${id}`);
        setIncomingVideoCall(false);
    }

    const rejectCall = () => {
        setIncomingVideoCall(false);
    }

    useEffect(() => {
        setTimeout(() => {
            rejectCall();
        }, 15000);
    }, []);

    return (
        <div className="flex flex-row items-center space-x-4 px-4 py-5 fixed z-[9999] w-full bg-gray-800 border-2 border-sky-500 md:w-72 md:bottom-24 md:right-4">

            <div className="ml-6 lg:ml-0.5">
                <RingAvatar imgSrc={avatarSrc} type="videoCall" />
            </div>

            <div className="flex flex-col space-y-2.5">

                <div className="flex flex-col ml-1">
                    <span className="text-white">{name}</span>
                    <span className="text-white text-sm">Incoming video call</span>
                </div>

                <div className="flex flex-row space-x-4">
                    <button className="btn btn-sm btn-accent rounded-2xl text-white" onClick={acceptCall}>Accept</button>
                    <button className="btn btn-sm btn-error rounded-2xl text-white hover:opacity-75" onClick={rejectCall}>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default IncomingVideoCallWidget;