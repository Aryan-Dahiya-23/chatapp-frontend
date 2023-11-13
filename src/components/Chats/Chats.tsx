/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent, useEffect, useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import OnlineAvatar from "../Avatar/OnlineAvatar";
import ChatBubble from "./ChatBubbe";
import {
    HiPaperAirplane,
    HiPhoto
} from "react-icons/hi2";
import { AuthContext } from "../../contexts/AuthContext";

const Chats = () => {

    const navigate = useNavigate();

    const chatContainerRef = useRef<HTMLDivElement>(null);

    const [text, setText] = useState<string>('');
    const [textareaHeight, setTextareaHeight] = useState<boolean>(false);

    const { userEmail, setUserEmail } = useContext(AuthContext);

    const isMobileScreen = () => window.innerWidth <= 647;

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        setText(textarea.value);

        if (text.length === 0) {
            textarea.style.height = "0px";
        } else {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
        }

        if (parseFloat(textarea.style.height.slice(0, -2)) > 50) {
            setTextareaHeight(true);
        } else {
            setTextareaHeight(false);
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, []);

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="flex flex-col h-[100dvh] md:w-[58%] lg:w-[73%] md:border-l-2 md:border-gray-200">

            <div className="flex flex-row justify-between items-center min-h-[10%] lg:min-h-[12%] px-2 md:px-5 border-b-2 border-gray-200">

                <div className="text-sky-500 mr-2 md:hidden" onClick={handleClick}>
                    <IoIosArrowBack className="h-8 w-8" />
                </div>

                <div className="flex flex-row justify-center space-x-2.5 cursor-pointer">
                    <OnlineAvatar
                        height="12"
                        width="12"
                        imgSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold">Aryan Dahiya</p>
                        <p className="text-gray-500 text-sm">Active</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-1 md:p-1 cursor-pointer ml-auto hover:opacity-75">
                    <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
                    <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
                    <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-sky-500"></div>
                </div>
            </div>

            <div className="`flex flex-col px-1 lg:px-4 overflow-y-auto custom-scrollbar"  ref={chatContainerRef}>
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
            </div>

            <div
                className={`flex flex-row justify-between w-full space-x-4 p-4 border-t-2 border-gray-200 ${textareaHeight ? "items-end" : "items-center"}`}>

                <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />

                <textarea
                    placeholder="Write a message"
                    className="textarea textarea-bordered textarea-sm w-full resize-none leading-normal custom-scrollbar"
                    onChange={handleTextareaChange}
                ></textarea>

                <HiPaperAirplane className="chat-icons text-sky-500 hover:text-sky-600" />
            </div>

        </div>
    );
}

export default Chats;

// <form action="" className="flex flex-row space-x-4 h-full px-2 justify-center items-center w-full">
//     <HiPaperAirplane className="chat-icons text-sky-500 hover:text-sky-600" />
// </form>