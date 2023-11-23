import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import OfflineAvatar from "../Avatar/OfflineAvatar";
import { AuthContext } from "../../contexts/AuthContext";
import { queryClient } from "../../api/auth";
import { createConversation } from "../../api/conversation";

interface PeopleItemsProps {
    username: string;
    avatarSrc: string,
    userId: string;
}

const PeopleItems: React.FC<PeopleItemsProps> = ({
    username,
    avatarSrc,
    userId,
}) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await createConversation(user._id, userId);
            return response;
        },
        onSuccess: async (data) => {
            const chatId = data?.data.chat._id;
            navigate(`/chats/${chatId}`);
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error) => {
            console.error("Error creating chat:", error);
        },
    });

    const navigateToChat = () => {

        for (let i = 0; i < user.conversations.length; i++) {
            if (user.conversations[i].conversation.participants.length === 1 && user.conversations[i].conversation.participants[0]._id === userId) {
                navigate(`/chats/${user.conversations[i].conversation._id}`);
                return;
            }
        }

        mutate();
    };

    return (
        <div
            className="flex flex-row items-center w-full px-3 lg:px-2 rounded-xl space-x-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => navigateToChat()}
        >
            <div className="flex items-center h-16">
                <OfflineAvatar height="12" width="12" imgSrc={avatarSrc} />
            </div>

            <div className="flex flex-col justify-center w-5/6 h-16 border-b-2 border-gray-200">
                <p
                    className="lg:text-lg font-semibold lg:font-bold w-full max-w-[80%] md:max-w-[70%] whitespace-nowrap text-ellipsis overflow-hidden"
                >
                    {username}
                </p>
            </div>


        </div>
    );
};

export default PeopleItems;