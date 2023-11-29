import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import OnlineAvatar from "../Avatar/OnlineAvatar";
import OfflineAvatar from "../Avatar/OfflineAvatar";

interface ChatHeaderProps {
    name: string;
    avatarSrc: string[];
    online: boolean;
    conversationType: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, avatarSrc, online, conversationType }) => {

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

                {conversationType === 'personal' ?
                    online ?
                        <OnlineAvatar
                            height="12"
                            width="12"
                            imgSrc={avatarSrc[0]}
                        />
                        :
                        <OfflineAvatar
                            height="12"
                            width="12"
                            imgSrc={avatarSrc[0]}
                        />
                    :
                    <div className="flex flex-col-reverse justify-end items-center">
                        <div className="flex flex-row md:mt-1 space-x-1">
                            <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[0]} />
                            <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[1]} />
                        </div>
                        <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[2]} />
                    </div>
                }

                <div className="flex flex-col">
                    <p className="font-semibold text-lg">
                        {name}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {conversationType === 'personal' ?
                            online ? "Online" : "Offline"
                            :
                            avatarSrc.length + " Members"
                        }
                    </p>
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



// {conversationType === 'personal' ?
// online ?
//     <OnlineAvatar
//         height="12"
//         width="12"
//         imgSrc={avatarSrc[0]}
//     />
//     :
//     <OfflineAvatar
//         height="12"
//         width="12"
//         imgSrc={avatarSrc[0]}
//     />
// :
// <div className="flex flex-col-reverse justify-end items-center">
//     <div className="flex flex-row mt-1 space-x-1">
//         <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[0]} />
//         <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[1]} />
//     </div>
//     <OfflineAvatar height="6" width="6" imgSrc={avatarSrc[2]} />
// </div>
// }


