// import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import OnlineAvatar from "../Avatar/OnlineAvatar";
import OfflineAvatar from "../Avatar/OfflineAvatar";
// import { AuthContext } from "../../contexts/AuthContext"

interface ChatHeaderProps {
    name: string;
    avatarSrc: string
    online: boolean
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, avatarSrc, online }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="flex flex-row justify-between items-center min-h-[10%] lg:min-h-[12%] px-2 md:px-5 border-b-2 border-gray-200">

            <div className="text-sky-500 mr-2 md:hidden" onClick={handleClick}>
                <IoIosArrowBack className="h-8 w-8" />
            </div>

            <div className="flex flex-row justify-center space-x-2.5 cursor-pointer">

                {online ?
                    <OnlineAvatar
                        height="12"
                        width="12"
                        imgSrc={avatarSrc}
                    />
                    :
                    <OfflineAvatar
                        height="12"
                        width="12"
                        imgSrc={avatarSrc}
                    />
                }

                <div className="flex flex-col">
                    <p className="font-semibold">
                        {name}
                    </p>
                    <p className="text-gray-500 text-sm">{online ? "Online" : "Offline"}</p>
                </div>
            </div>

            <div className="flex flex-row space-x-1 md:p-1 cursor-pointer ml-auto hover:opacity-75">
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
            </div>
        </div>
    )
}

export default ChatHeader;