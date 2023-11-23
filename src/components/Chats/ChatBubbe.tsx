interface ChatBubbleProps {
    position: string;
    sender: string;
    message: string;
    createdAt: string;
    avatarSrc: string;
    footerName: string;
    isLastMessage: boolean;
    online: boolean;
    messageSeen: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
    position,
    sender,
    message,
    createdAt,
    avatarSrc,
    footerName,
    isLastMessage,
    online,
    messageSeen,
}) => {

    const formattedTime = new Date(createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    // const formattedTime = new Date(createdAt).toLocaleTimeString('en-US', { hour12: false });

    return (
        <div>

            {position === "right" ? (
                <div className="chat chat-end space-y-1">

                    <div className="chat-image online avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={avatarSrc} alt="profile" />
                        </div>
                    </div>

                    <div className="chat-header">
                        {sender}
                        <time className="text-xs opacity-80 ml-1">{formattedTime}</time>
                    </div>
                    <div className="chat-bubble text-white bg-sky-500 font-semibold">{message}</div>
                    {isLastMessage && messageSeen &&
                        <div className="chat-footer opacity-90">
                            {"Seen by " + footerName.split(" ")[0]}
                        </div>
                    }
                </div>
            ) : (

                <div className="chat chat-start space-y-1">

                    <div className={`chat-image avatar ${online && "online"}`}>
                        <div className="w-12 h-12 rounded-full">
                            <img src={avatarSrc} alt="profile" />
                        </div>
                    </div>

                    <div className="chat-header">
                        {sender}
                        <time className="text-xs opacity-80 ml-1">{formattedTime}</time>
                    </div>
                    <div className="chat-bubble text-black bg-gray-100 font-semibold">{message}</div>
                </div>
            )}

        </div>
    );
};

export default ChatBubble;
