import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt, ZegoUser } from '@zegocloud/zego-uikit-prebuilt';
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Room = () => {

    const navigate = useNavigate();
    const { roomId } = useParams();

    const { user } = useContext(AuthContext);

    const myMeeting = async (element) => {
        const appID = 667370382;
        const serverSecret = "a4ca40baccffce58fef41747feddbf60";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId ? roomId : 'abcdef1234',
            Date.now().toString(),
            user.fullName,
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P,
            showPreJoinView: false,
            showRoomTimer: true,
            onLeaveRoom: () => {
                navigate('/');
                const navigateToHome = () => {
                    // window.location.href = "http://localhost:3000"
                    window.location.href = "https://nexus-aryan.vercel.app"
                }
                setTimeout(navigateToHome, 10);
            },
            onUserLeave: (users: ZegoUser[]) => {
                toast.success(users.length)
            },
            onUserJoin: (users: ZegoUser[]) => {
                // toast.success("length " + users.length)
            }
        });
    }

    return (
        <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }} />
    )

}

export default Room;