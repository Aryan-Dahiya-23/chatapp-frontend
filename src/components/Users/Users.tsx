import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header";
import UsersItems from "./UsersItems";
import { AuthContext } from "../../contexts/AuthContext";
import { verify } from "../../api/auth";

const Users = () => {

    const { connectedUsers } = useContext(AuthContext);

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: () => verify(),
        staleTime: 10000000,
    });

    useEffect(() => {
        // alert(connectedUsers);
    }, [connectedUsers]);

    return (
        <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[40%] lg:w-[25%] lg:pl-2 md:h-[100vh]">

            <Header message="Messages" />

            <div className="flex flex-col space-y-1 py-2 custom-scrollbar">
                {user &&
                    user.conversations.map((conversation) => {

                        // if(connectedUsers.length > 0 && connectedUsers.includes(conversation.conversation.participants[0]._id)){

                        // }

                        return (
                            <UsersItems
                                key={conversation.conversation.participants[0]._id}
                                username={conversation.conversation.participants[0].fullName}
                                conversationId={conversation.conversation._id}
                                avatarSrc={conversation.conversation.participants[0].picture}
                                lastMessage={conversation.conversation.lastMessage
                                    ?
                                    conversation.conversation.lastMessage.content
                                    :
                                    "Started a conversation"}
                                lastMessageTime={conversation.conversation.lastMessage &&
                                    new Date(conversation.conversation.lastMessage.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                                online={connectedUsers.length > 0 && connectedUsers.includes(conversation.conversation.participants[0]._id)}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Users;