import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ChatBubble from "./ChatBubbe";
import { useQuery } from "@tanstack/react-query";
import { verify } from "../../api/auth";
import { fetchMessages } from "../../api/chat";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chats = () => {

    const { id } = useParams();
    const chatContainerRef = useRef<HTMLDivElement>(null);   

    const { data: user, isSuccess: isDone } = useQuery({
        queryKey: ['user'],
        queryFn: () => verify(),
        staleTime: 10000,
    });

    const userId = user?._id;

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['chats', id],
        queryFn: () => fetchMessages(userId, id),
        staleTime: 10000,
        enabled: !!userId
    });

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [data]);

    return (
        <div className={`flex flex-col h-[100dvh] md:w-[52%] lg:w-[70%] md:border-l-2 md:border-gray-200`}>

            {isDone && (
                <>
                    <ChatHeader
                        name={user.fullName}
                        avatarSrc={user.picture}
                        id={id}
                    />

                    {isLoading && (
                        <div className="m-auto">
                            <span className="loading loading-infinity loading-lg text-info"></span>
                        </div>)
                    }

                    <div className="`flex flex-col px-1 md:px-2 lg:px-4 lg:py-1.5 overflow-y-auto custom-scrollbar" ref={chatContainerRef}>

                        {isSuccess && data.messages.map((message) => {
                            return (
                                <ChatBubble
                                    key={message?._id}
                                    position={userId === message.senderId._id ? "right" : "left"}
                                    sender={message.senderId.fullName}
                                    message={message.content}
                                    createdAt={message.createdAt ? message.createdAt : Date.now()}
                                    avatarSrc={message.senderId.picture}
                                />
                            );
                        })}
                    </div>

                    <ChatInput
                        data={data}
                        id={id}
                    />
                </>
            )}

        </div>
    );
}

export default Chats;