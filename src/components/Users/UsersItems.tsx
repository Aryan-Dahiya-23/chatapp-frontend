import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import OfflineAvatar from "../Avatar/OfflineAvatar";
import OnlineAvatar from "../Avatar/OnlineAvatar";
import { AuthContext } from "../../contexts/AuthContext";
import { queryClient } from "../../api/auth";
import { getConversation } from "../../api/conversation";
import OfflineAvatar from "../Avatar/OfflineAvatar";

interface UsersItemsProps {
    username: string;
    avatarSrc: string;
    conversationId: string;
    lastMessage: string;
    lastMessageTime: string;
    online: boolean;
    messageSeen: boolean;
}

const UsersItems: React.FC<UsersItemsProps> = ({
    username,
    avatarSrc,
    conversationId,
    lastMessage,
    lastMessageTime,
    online,
}) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const navigateToChat = () => {
        navigate(`/chats/${conversationId}`);
    };

    const prefetch = () => {
        queryClient.prefetchQuery({
            queryKey: ['chats', conversationId],
            queryFn: () => getConversation(user._id, conversationId),
            staleTime: 60000,
        })
    }

    return (
        <div
            className="flex flex-row  w-full px-3 lg:px-2 py-2 rounded-xl space-x-2 hover:bg-gray-100 cursor-pointer"
            onClick={navigateToChat}
            onMouseEnter={prefetch}
            onTouchMove={prefetch}
            onFocus={prefetch}
        >
            <div className="flex h-12 w-12">
                {online ?
                    <OnlineAvatar height="12" width="12" imgSrc={avatarSrc} />
                    :
                    <OfflineAvatar height="12" width="12" imgSrc={avatarSrc} />
                }
            </div>

            <div className="flex flex-col w-5/6 h-16 border-b-2 border-gray-200">
                <div className="flex flex-row w-full justify-between">
                    <p className="lg:text-lg font-semibold lg:font-bold  max-w-[80%] md:max-w-[70%] h-full whitespace-nowrap text-ellipsis overflow-hidden">
                        {username}
                    </p>
                    <p className="text-sm text-gray-400">{lastMessageTime}</p>
                </div>

                <div className="w-full">
                    <p className={`text-gray-500 w-[100%] whitespace-nowrap text-ellipsis overflow-hidden`}>
                        {lastMessage}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default UsersItems;