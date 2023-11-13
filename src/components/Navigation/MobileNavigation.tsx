import { BsFillChatDotsFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md"
import { IoLogOutOutline } from "react-icons/io5"
import RingAvatar from "../Avatar/RingAvatar";

const MobileNavigation = () => {
    return (
        <div className="flex fixed bottom-0 h-16 bg-gray-50 z-50 px-3 border-t border-gray-400 flex-row justify-between w-full space-x-4 md:hidden">

            <div className="flex p-2 h-full items-center">
                <BsFillChatDotsFill className="icons" />
            </div>

            <div className="flex p-2 h-full items-center ">
                <MdPeopleAlt className="icons"/>
            </div>

            <div className="flex p-2 h-full items-center ">
                <IoLogOutOutline className="icons"/>
            </div>

            <div className="flex p-2 h-full items-center ">
                <RingAvatar
                    height="8"
                    width="8"
                    imgSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div>
        </div>
    )
}

export default MobileNavigation;