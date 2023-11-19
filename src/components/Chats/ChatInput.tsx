/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useMutation } from "@tanstack/react-query";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { queryClient } from "../../api/auth";
import { createMessage } from "../../api/chat";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

type ChatInputProps = {
    data: {
        participants: {
            _id: string;
            fullName: string;
            picture: string;
        }[];
        messages: any[];
    };
    conversationId: string | undefined;
};

const socket: Socket = io(import.meta.env.VITE_URL);

const ChatInput: React.FC<ChatInputProps> = ({ data, conversationId }) => {

    const user: any = queryClient.getQueryData(['user']);

    const [text, setText] = useState<string>('');
    const [textareaHeight, setTextareaHeight] = useState<boolean>(false);
    const [message, setMessage] = useState<object>({});
    const { receiverId, setReceiverId } = useContext(AuthContext);
    const { setChatHeight } = useContext(ThemeContext);

    useEffect(() => {
        if (user && data) {
            setReceiverId(data.participants[0]._id);
        }
    }, [user, data]);

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        setText(textarea.value);

        if (text.length === 0) {
            textarea.style.height = "0px";
        } else {
            // textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 75)}px`;
        }

        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 75)}px`;

        if (parseFloat(textarea.style.height.slice(0, -2)) > 60) {
            setTextareaHeight(true);
        } else {
            setTextareaHeight(false);
        }
    };

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await createMessage(conversationId, message);
            return response;
        },
        onMutate: () => {
            queryClient.cancelQueries({ queryKey: ['chats', conversationId] });

            const newMessage = {
                ...message,
                senderId: {
                    _id: user?._id,
                    fullName: user?.fullName,
                    picture: user?.picture
                },
            }

            const newData = {
                ...data,
                messages: [...data.messages, newMessage],
            };

            queryClient.setQueryData(['chats', conversationId], newData);

            socket.emit('chat message', receiverId, newMessage, conversationId);

            return { previousData: data };
        },
        onSuccess: () => {
            socket.emit('chat message', receiverId);
            queryClient.invalidateQueries({ queryKey: ['user'] });
            queryClient.invalidateQueries({ queryKey: ['chats', conversationId] });
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(['chats', conversationId], context?.previousData);
            console.error('Error creating chat:', error);
        },
    });

    const handleMessageSend = () => {
        if (text === '') return

        setText('');
        const newMessage = {
            senderId: user._id,
            content: text,
            readBy: [],
        }
        setMessage(newMessage);
        mutate();
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleMessageSend();
        }
    }

    return (
        <div
            className={`flex flex-row justify-between w-full space-x-4 p-3 mt-auto lg:p-4 border-t-2 border-gray-200 ${textareaHeight ? "items-end" : "items-center"}`}>

            <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />

            <textarea
                placeholder="Write a message"
                className="textarea textarea-bordered text-base textarea-sm w-11/12 resize-none leading-normal custom-scrollbar"
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                value={text}
                onFocus={() => setChatHeight(true)}
                onBlur={() => setChatHeight(false)}
            ></textarea>

            <HiPaperAirplane className="chat-icons text-sky-500 hover:text-sky-600" onClick={handleMessageSend} />
        </div>
    );
}

export default ChatInput;