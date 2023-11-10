const ChatBubble = () => {
    return (
        <div>

            <div className="chat chat-start">
           
                <div className="chat-image online avatar">
                    <div className="w-12 h-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile"/>
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble text-black bg-gray-100 font-semibold">You were the Chosen One!</div>
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
                <div className="chat-bubble text-white bg-sky-500 font-semibold">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
    )
}

export default ChatBubble;