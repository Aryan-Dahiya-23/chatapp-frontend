// import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {

    // const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 667370382;
        const serverSecret = "a4ca40baccffce58fef41747feddbf60";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            "123",
            Date.now().toString(),
            "Aryan Dahiya"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        });
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;