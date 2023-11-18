interface ChatBubbleProps {
    position: string;
    sender: string;
    message: string;
    createdAt: string;
    avatarSrc: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
    position,
    sender,
    message,
    createdAt,
    avatarSrc,
}) => {

    const formattedTime= new Date(createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    // const formattedTime = new Date(createdAt).toLocaleTimeString('en-US', { hour12: false });

    return (
        <div>

            {position === "right" ? (
                <div className="chat chat-end">

                    <div className="chat-image online avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={avatarSrc} alt="profile" />
                        </div>
                    </div>
                    <div className="chat-header">
                        {sender}
                        <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
                    </div>
                    <div className="chat-bubble text-white bg-sky-500 font-semibold">{message}</div>
                    <div className="chat-footer opacity-50">
                        {formattedTime}
                    </div>
                </div>
            ) : (

                <div className="chat chat-start">

                    <div className="chat-image online avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={avatarSrc} alt="profile" />
                        </div>
                    </div>
                    <div className="chat-header">
                        {sender}
                        <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
                    </div>
                    <div className="chat-bubble text-black bg-gray-100 font-semibold">{message}</div>
                </div>
            )}

        </div>
    );
};

export default ChatBubble;
