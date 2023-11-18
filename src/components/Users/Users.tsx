import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header";
import UsersItems from "./UsersItems";
import { verify } from "../../api/auth";

const Users = () => {

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: () => verify(),
        staleTime: 10000000,
    });

    return (
        <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[40%] lg:w-[25%] lg:pl-2 md:h-[100vh]">

            <Header message="Messages" />

            <div className="flex flex-col space-y-1 py-2 custom-scrollbar">
                {user &&
                    user.messages.map((user: {
                        _id: string; conversationId: string;
                        userId: { fullName: string, picture: string, _id: string };
                        lastMessage: { lastMessage: { content: string, createdAt: string } }
                    }) => (
                        <UsersItems
                            key={user.userId._id}
                            userId={user.userId._id}
                            username={user.userId.fullName}
                            conversationId={user.conversationId}
                            avatarSrc={user.userId.picture}
                            lastMessage={user.lastMessage.lastMessage.content}
                            lastMessageTime={new Date(user.lastMessage.lastMessage.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                        />
                    ))}

            </div>
        </div>
    )
}

export default Users;