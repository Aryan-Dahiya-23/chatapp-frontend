/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useMutation } from "@tanstack/react-query";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { queryClient } from "../../api/auth";
import { createMessage } from "../../api/chat";
import { AuthContext } from "../../contexts/AuthContext";

type ChatInputProps = {
    data: {
        participants: {
            _id: string;
            fullName: string;
            picture: string;
        }[];
        messages: any[];
    };
    id: string | undefined;
};

const ChatInput: React.FC<ChatInputProps> = ({ data, id }) => {

    const socket: Socket = io(import.meta.env.VITE_URL);

    const user: any = queryClient.getQueryData(['user']);

    const [text, setText] = useState<string>('');
    const [textareaHeight, setTextareaHeight] = useState<boolean>(false);
    const [message, setMessage] = useState<object>({});
    const { receiverId, setReceiverId } = useContext(AuthContext);

    useEffect(() => {
        if (user && data) {
            const filteredParticipants = data.participants.filter(participant => participant._id !== user._id);
            setReceiverId(filteredParticipants[0]._id);
        }
    }, [user, data]);

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        setText(textarea.value);

        if (text.length === 0) {
            textarea.style.height = "0px";
        } else {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
        }

        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;

        if (parseFloat(textarea.style.height.slice(0, -2)) > 50) {
            setTextareaHeight(true);
        } else {
            setTextareaHeight(false);
        }
    };

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await createMessage(id, message);
            return response;
        },
        onMutate: () => {
            queryClient.cancelQueries({ queryKey: ['chats', id] });

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

            queryClient.setQueryData(['chats', id], newData);

            return { previousData: data };
        },
        onSuccess: () => {
            socket.emit('chat message', receiverId);
            queryClient.invalidateQueries({ queryKey: ['user'] });
            queryClient.invalidateQueries({ queryKey: ['chats', id] });
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(['chats', id], context?.previousData);
            console.error('Error creating chat:', error);
        },
    });

    const handleMessageSend = () => {
        if (text === '') return

        setText('');
        const newMessage = {
            senderId: user._id,
            content: text,
            read: false,
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
                className="textarea textarea-bordered textarea-sm w-1/12 resize-none leading-normal custom-scrollbar"
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                value={text}
            ></textarea>

            {/* <input type="text" placeholder="Type here" className="input input-bordered input-md w-full" /> */}

            <HiPaperAirplane className="chat-icons text-sky-500 hover:text-sky-600" onClick={handleMessageSend} />
        </div>
    );
}

export default ChatInput;