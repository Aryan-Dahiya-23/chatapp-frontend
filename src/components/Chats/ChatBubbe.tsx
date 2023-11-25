import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo, responsive, lazyload } from "@cloudinary/react"
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec';

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
    messageType: string;
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
    messageType,
}) => {

    const formattedTime = new Date(createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dq3iqffnu'
        }
    });

    const sources = [
        {
            type: 'mp4',
            codecs: ['avc1.4d002a'],
            transcode: videoCodec(auto())
        },
        {
            type: 'webm',
            codecs: ['vp8', 'vorbis'],
            transcode: videoCodec(vp9())
        }];

    let myImage;
    let myVideo;

    if (messageType === 'image') {
        myImage = cld.image(message);
    } else if (messageType === 'video') {
        myVideo = cld.video(message);
    }

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
                    {messageType === 'text' ? (
                        <div className="chat-bubble text-white bg-sky-500 font-semibold">{message}</div>
                    ) : messageType === 'image' ? (
                        <AdvancedImage
                            className="max-w-[60%] md:max-w-[50%] lg:max-w-[25%] rounded-lg"
                            cldImg={myImage}
                            plugins={[responsive()]}
                        />
                    ) : (
                        <AdvancedVideo
                            className="max-w-[60%] md:max-w-[50%] lg:max-w-[25%] rounded-lg"
                            cldVid={myVideo}
                            cldPoster="auto"
                            plugins={[lazyload()]}
                            preload="none"
                            sources={sources}
                            controls
                        />
                    )
                    }

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
                    {messageType === 'text' ? (
                        <div className="chat-bubble text-white bg-sky-500 font-semibold">{message}</div>
                    ) : messageType === 'image' ? (
                        <AdvancedImage
                            className="max-w-[60%] md:max-w-[50%] lg:max-w-[25%] rounded-lg"
                            cldImg={myImage}
                            plugins={[responsive()]}
                        />
                    ) : (
                        <AdvancedVideo
                            className="max-w-[60%] md:max-w-[50%] lg:max-w-[25%] rounded-lg"
                            cldVid={myVideo}
                            controls
                        />
                        // <video src={message} autoPlay controls className="max-w-[60%] md:max-w-[50%] lg:max-w-[25%] rounded-lg" />
                    )
                    }
                </div>
            )}

        </div>
    );
};

export default ChatBubble;