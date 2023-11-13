const ChatBubble = () => {

    const receiverMessage: string = "Hey there! I just finished reading an amazing book. The plot twists were unexpected, and the characters were so well-developed. Highly recommend it!";
    const senderMessage: string = "That sounds intriguing! I've been meaning to pick up a good book. Do you mind sharing the title and author? I'm always on the lookout for something interesting to read.";

    return (
        <div>

            <div className="chat chat-start">

                <div className="chat-image online avatar">
                    <div className="w-12 h-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble text-black bg-gray-100 font-semibold">{receiverMessage}</div>
            </div>

            <div className="chat chat-end">

                <div className="chat-image online avatar">
                    <div className="w-12 h-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble text-white bg-sky-500 font-semibold">{senderMessage}</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
    )
}

export default ChatBubble;