import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { io, Socket } from "socket.io-client";
import { AuthContext } from "../../contexts/AuthContext";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubbe";
import { queryClient, verify } from "../../api/auth";
import { getConversation, readMessage } from "../../api/conversation";

const socket: Socket = io(import.meta.env.VITE_URL);

const Chats = () => {

    const { id } = useParams();
    const { messageSeenStatus, setMessageSeenStatus } = useContext(AuthContext);
    const [receiverName, setreceiverName] = useState<string>("");
    const [receiverAvatarSrc, setReceiverAvatarSrc] = useState<string[]>([]);
    const [receiverOnline, setReceiverOnline] = useState<boolean>(false);
    const [conversationType, setConversationType] = useState<string>("");
    const { connectedUsers } = useContext(AuthContext)
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const { data: user, isSuccess: isDone } = useQuery({
        queryKey: ['user'],
        queryFn: () => verify(),
        staleTime: 20000,
    });

    const userId = user?._id;

    const { data: conversation, isSuccess, isLoading } = useQuery({
        queryKey: ['chats', id],
        queryFn: () => getConversation(userId, id),
        staleTime: 10000,
        enabled: !!userId
    });

    const { mutate } = useMutation({
        mutationFn: () => readMessage(userId, id),
        onMutate: () => {
            setMessageSeenStatus('pending');
        },
        onSuccess: () => {
            socket.emit('seen message', id);
            queryClient.invalidateQueries({ queryKey: ['user'] });
            setMessageSeenStatus('idle');
        }
    });

    useEffect(() => {
        if (isSuccess && conversation.lastMessage && conversation.messages[conversation.messages.length - 1]._id) {
            const lastMessage = conversation.lastMessage;
            if (messageSeenStatus === 'idle' && lastMessage.senderId !== userId && !lastMessage.seenBy.includes(userId)) {
                setMessageSeenStatus('pending');
                mutate();
            }
        }
        scrollTopToBottom();

    }, [conversation, id]);

    const scrollTopToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }

    const scrollSmooth = () => {
        if (chatContainerRef.current) {
            const chatContainer = chatContainerRef.current;
            const lastChild = chatContainer.lastElementChild;

            if (lastChild) {
                lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    };

    useEffect(() => {
        setTimeout(scrollSmooth, 150);
    }, []);

    useEffect(() => {

        if (user) {
            user.conversations.map((conversation) => {
                if (conversation.conversation._id === id) {
                    if (conversation.conversation.type === 'personal') {
                        setreceiverName(conversation.conversation.participants[0].fullName);
                        setReceiverAvatarSrc([conversation.conversation.participants[0].picture]);
                        setConversationType('personal');
                        if (connectedUsers.length > 0 && connectedUsers.includes(conversation.conversation.participants[0]._id)) {
                            setReceiverOnline(true);
                        } else {
                            setReceiverOnline(false);
                        }
                    }
                    else {
                        setreceiverName(conversation.conversation.name);
                        setReceiverAvatarSrc([...conversation.conversation.participants.map((participant) => participant.picture), user.picture]);
                        setConversationType('group');
                    }
                }
            })
        }

    }, [user, conversation, connectedUsers, id]);

    return (

        <div className={`flex flex-col h-[100dvh] md:w-[52%] lg:w-[70%] md:border-l-2 md:border-gray-200`} >

            {isDone && (
                <>
                    <ChatHeader
                        name={receiverName}
                        avatarSrc={receiverAvatarSrc}
                        online={receiverOnline}
                        conversationType={conversationType}
                    />

                    {isLoading && (
                        <div className="m-auto">
                            <span className="loading loading-infinity loading-lg text-info"></span>
                        </div>)
                    }

                    <div className="`flex flex-col px-1 md:px-2 lg:px-4 lg:py-1.5 overflow-y-auto custom-scrollbar" ref={chatContainerRef}>

                        {isSuccess && conversation.messages.map((message, index: number) => {

                            const isLastMessage = index === conversation.messages.length - 1;
                            const messageSeen = message.seenBy && message.seenBy.length >= conversation.participants.length;

                            return (
                                <ChatBubble
                                    key={message?._id}
                                    conversationType={conversation.type}
                                    position={userId === message.senderId._id ? "right" : "left"}
                                    sender={message.senderId.fullName}
                                    message={message.content}
                                    createdAt={message.createdAt ? message.createdAt : Date.now()}
                                    avatarSrc={message.senderId.picture}
                                    footerName={receiverName}
                                    isLastMessage={isLastMessage}
                                    online={connectedUsers.length > 0 && connectedUsers.includes(message.senderId._id)}
                                    messageType={message.type}
                                    messageSeen={messageSeen}
                                />
                            );
                        })}
                    </div>


                    <ChatInput
                        data={conversation}
                        conversationId={id}
                    />
                </>
            )}

        </div >
    )
}

export default Chats;